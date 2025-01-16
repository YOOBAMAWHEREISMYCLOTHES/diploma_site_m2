import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  const login = async () =>{
    console.log("login Function Executed", formData);
    // getting the data an input field
    let responseData;
    await fetch('https://trendywear-backend-o4qr.onrender.com/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }

  }

  const signup = async () =>{
    console.log("Signup Function Executed", formData);
    // getting the data an input field
    let responseData;
    await fetch('https://trendywear-backend-o4qr.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }

  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Ваш ПІБ'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email адреса'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Пароль' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Продовжити</button>
        {state==="Sign Up"
        ?<p className="loginsignup-login">Уже маєте акаунт? <span onClick={()=>{setState("Login")}}>Увійдіть тут</span></p>
        :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
        }
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>Продовжуючи, я погоджуюсь з використанням правил та умов.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
