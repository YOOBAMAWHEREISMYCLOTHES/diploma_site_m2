const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require('@fluidjs/multer-cloudinary');
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect("mongodb+srv://bohdandovhyi:Abazhur17712.@cluster0.cxt34.mongodb.net/e-commerce");

// Cloudinary Configuration
cloudinary.config({
    cloud_name: "dgnhbaxzg", // Замініть на своє ім'я Cloudinary
    api_key: "288363273421953",       // Замініть на ваш API Key
    api_secret: "tVdSabQwwRVTGnqUH3bMOdv2Hcs"  // Замініть на ваш API Secret
});

// Multer Cloudinary Storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "products",       // Папка у Cloudinary, куди зберігатимуться фото
        allowed_formats: ["jpg", "png", "jpeg"],
    },
});

const upload = multer({ storage });

// API Creation

app.get("/",(req,res)=>{
    res.send("Express App is running")
})

// Creating Upload Endpoint for Images
app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: req.file.path, // Cloudinary автоматично повертає URL завантаженого фото
    });
});

// Schema for Creating Products

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },

    name:{
        type:String,
        required:true,
    },

    image:{
        type:String,
        required:true,
    },

    category:{
        type:String,
        required:true,
    },

    new_price:{
        type:Number,
        required:true,
    },

    old_price:{
        type:Number,
        required:true,
    },

    date:{
        type:Date,
        default:Date.now,
    },
    
    avilable:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct', async (req,res)=>{
    let products = await Product.find({});
    let id;
    if (products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else {
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating API for deleting products

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Remove");
    res.json({
        success:true,
        name:req.body.name
    })

})

// Creating API for getting all products

app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All products Fetched");
    res.send(products);
    //res.send("Express App is running")
})

//Schema creating for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        deflate:Date.now,
    }
})

// Creating Endpoint for Registering 
// check user have account
app.post('/signup',async (req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    // if no user create empty cart
    let cart = {};
    for (let i = 0; i < 300; i++){
        cart[i] = 0;
    }

    // create user
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    // save user
    await user.save();

    // creating token with data
    const data = {
        user:{
            id:user.id
        }
    }

    //create token will not be readable
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})

})

// creating end point for user login
app.post('/login', async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    // Comparing the password
    if (user) {
        const passCompare = req.body.password == user.password;
        if(passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})

// creating endpoint for newcollection data
app.get('/newcollections',async (req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

//creating endpoint for popular in women section
app.get('/popularinwomen', async (req,res)=>{
    let products = await Product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    console.log("Popular in women fetched");
    res.send(popular_in_women);
})

// creating middleware to fetch user
const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({errors:"Please authenticate using valid token"});
    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        }
        catch (error){
            res.status(401).send({errors:"please authenticate using a valid token"});
        }
    }
}

// creating endpoint for adding products in cartdata
app.post('/addtocart',fetchUser,async (req,res)=>{
    console.log(req.body,req.user);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})

// creating endpoint remove product from cartdata
app.post('/removefromcart',fetchUser,async (req,res)=>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})

// creating endpoint to get cartdata
app.post('/getcart',fetchUser,async (req,res)=>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

app.listen(port,(error)=>{
    if (!error) {
        console.log("Server running on port "+ port)
    }
    else
    {
        console.log("Error "+ error)
    }
})