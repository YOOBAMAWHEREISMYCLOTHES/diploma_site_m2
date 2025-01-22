import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LogoSlider.css'; // Файл стилів

const logos = [
  { id: 1, src: require('../Assets/gucci.png') },
  { id: 2, src: require('../Assets/calvin-klein.png') },
  { id: 3, src: require('../Assets/zara.png') },
  { id: 4, src: require('../Assets/versace.png') },
  { id: 5, src: require('../Assets/lacoste.png') },
  { id: 6, src: require('../Assets/dolce-gabbana.png') },
  { id: 7, src: require('../Assets/fred-perry.png') },
  { id: 8, src: require('../Assets/hugo-boss.png') },
  { id: 9, src: require('../Assets/ralph-lauren.png') },
];

const LogoSlider = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4, // Менше слайдів для планшетів
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2, // Ще менше слайдів для мобільних
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1, // Один слайд для дуже малих екранів
            },
        },
    ],
};


  return (
    <div className="logo-slider">
      <Slider {...settings}>
        {logos.map((logo) => (
          <div key={logo.id} className="logo-slide">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;