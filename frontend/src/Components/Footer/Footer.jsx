import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <h1 className="footer-logo">TrendyWear</h1>
            <p className="footer-description">
              Наш магазин пропонує широкий асортимент товарів для всієї родини. Ми прагнемо зробити ваш шопінг простим, зручним і приємним, надаючи широкий вибір моделей для будь-якого сезону, події та настрою.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-column-title">Поширте нас!</h3>
              <ul className="footer-list">
                <li><button className="social-button facebook">Facebook</button></li>
                <li><button className="social-button twitter">X.com</button></li>
                <li><button className="social-button linkedin">LinkedIn</button></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">Контакти</h3>
              <ul className="footer-list">
                <li>📍 Київ, Україна</li>
                <li>✉️ trendywear@shop.com</li>
                <li>📞 +380-99-123-4567</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025, developed by TrendyWear. All rights reserved.</p>
        </div>
      </footer>
  )
}

export default Footer;
