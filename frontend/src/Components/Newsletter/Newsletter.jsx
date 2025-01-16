import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div id='news_letter' className='newsletter'>
      <h1>Отримуйте ексклюзивні пропозиції на ваш Email</h1>
      <p>Підпишіться на нашу новинну стрічку та будьте в тренді!</p>
      <div>
        <input type='email' placeholder='Ваш Email'/>
        <button>Підписатись</button>
      </div>
    </div>
  )
}

export default Newsletter
