import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';

const NewCollections = () => {

// create state variable for set new collections
const [new_collection,setNew_collection] = useState([]);

useEffect(()=>{
  fetch('https://trendywear-backend-o4qr.onrender.com/newcollections')
  .then((response)=>response.json())
  .then((data)=>setNew_collection(data));
},[])

  return (
    <div id='newcollections' className='new-collections'>
      <h1>НОВІ КОЛЕКЦІЇ</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections;
