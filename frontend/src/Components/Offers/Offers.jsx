import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Ексклюзивні</h1>
            <h1>Пропозиції для вас</h1>
            <p>ТІЛЬКИ НА НАЙКРАЩІ ТОВАРИ</p>
            <button><a href='#news_letter'>Дивитись зараз</a></button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
      
    </div>
  )
}

export default Offers;
