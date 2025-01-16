import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>ТІЛЬКИ НОВІ НАДХОДЖЕННЯ</h2>
        <div>
        <div className="hero-hand-icon">
                <p>НОВІ</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>КОЛЕКЦІЇ</p>
            <p>ДЛЯ КОЖНОГО</p>
            </div>
        <div className="hero-latest-btn">
            <div><a href='#newcollections'>Останні Колекції</a></div>
            <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
            
    </div>
  )
}

export default Hero;
