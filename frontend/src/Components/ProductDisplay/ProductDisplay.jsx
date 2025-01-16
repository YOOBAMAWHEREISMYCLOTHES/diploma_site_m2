import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-image">
            <img className='productdisplay-main-img' src={product.image} alt=""/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">₴{product.old_price}</div>
            <div className='productdisplay-right-price-new'>₴{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">Структуровані вишукані панелі, що підкреслюють ефектну вечірку, найкраще оздоблення спини, силует олівця, ідеальний вигляд. Деталі банта металеві люверси шкіряна підкладка розкішна обробка класичних судів. Урочиста кепка з квадратним носком і контрастним кольором.
 
            </div>
            <div className="productdisplay-right-size">
                <h1>Обрати розмір</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>Xl</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ДО КОШИКА</button>
            <p className='productdisplay-right-category'><span>Категорія :</span> Жіночий, футболка, з вирізом.</p>
            <p className='productdisplay-right-category'><span>Теги :</span> Сучаний, останній</p>

      </div>
    </div>
  )
}

export default ProductDisplay;
