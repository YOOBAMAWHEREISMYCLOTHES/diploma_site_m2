import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import facebook from '../Assets/facebook-logo.png';
import x from '../Assets/x-logo.png';
import linkedin from '../Assets/linkedin-logo.png'; 

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <div className='footer-maintitle'>
            <img src={footer_logo} className="footer-image" />
            <h1 className="footer-logo">TrendyWear</h1>
            </div>
            <p className="footer-description">
              Наш магазин пропонує широкий асортимент товарів для всієї родини. Ми прагнемо зробити ваш шопінг простим, зручним і приємним, надаючи широкий вибір моделей для будь-якого сезону, події та настрою.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-column-title">Поширте нас!</h3>
              <ul className="footer-list">
                <li>
                  <button className="social-button facebook">
                    <img src={facebook} alt="Facebook" className="social-icon" /> Facebook
                  </button>
                </li>
                <li>
                  <button className="social-button twitter">
                    <img src={x} alt="Twitter" className="social-icon" /> X.com
                  </button>
                </li>
                <li>
                  <button className="social-button linkedin">
                    <img src={linkedin} alt="LinkedIn" className="social-icon" /> LinkedIn
                  </button>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">Контакти</h3>
              <ul className="footer-list">
                <li><a href="https://www.google.com/maps?q=Київ,+Україна" target="_blank" rel="noopener noreferrer">📍 Київ, Україна</a></li>
                <li><a href="mailto:trendywear@shop.com">✉️ trendywear@shop.com</a></li>
                <li><a href="tel:+380991234567">📞 +380-99-123-4567</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025, developed by <a href='https://www.linkedin.com/in/bohdan-dovhyi-4a1628216/'>Bohdan Dovhyi</a>. All rights reserved.</p>
        </div>
      </footer>
  )
}

export default Footer;
