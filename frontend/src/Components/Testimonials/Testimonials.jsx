import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Анна Сидорчук",
    review:
      "Чудовий магазин одягу! Висока якість та дуже стильні моделі. Мій улюблений магазин!",
    instagram: "https://www.instagram.com",
  },
  {
    id: 2,
    name: "Іван Ковальчук",
    review:
      "Швидка доставка та відмінний сервіс. Одяг ідеально підійшов і виглядає точно, як на фото!",
    instagram: "https://www.instagram.com",
  },
  {
    id: 3,
    name: "Марія Гриценко",
    review:
      "Дуже подобається різноманіття вибору та доступні ціни. Обов'язково порекомендую друзям!",
    instagram: "https://www.instagram.com",
  },
  {
    id: 4,
    name: "Олексій Бондаренко",
    review:
      "Чудовий сервіс та відмінна якість. Я залишаюся вашим постійним клієнтом!",
    instagram: "https://www.instagram.com",
  },
  {
    id: 5,
    name: "Олена Петрів",
    review:
      "Дизайни унікальні, а матеріал чудовий. Щиро рекомендую цей магазин!",
    instagram: "https://www.instagram.com",
  },
  {
    id: 6,
    name: "Максим Шевченко",
    review:
      "Фантастичний досвід! Одяг стильний, зручний і довговічний. Обожнюю цей бренд!",
    instagram: "https://www.instagram.com",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true, // Безкінечний слайдер
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    centerMode: true, // Центруємо активний слайд
    centerPadding: "30px", // Відстань для слайдів, що не показуються
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="testimonials-container">
      <h2 className="section-title">Що кажуть наші клієнти</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="testimonial-header">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <a
                href={testimonial.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="instagram-logo"
                />
              </a>
            </div>
            <p className="testimonial-review">{testimonial.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
