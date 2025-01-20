import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Anna Smith",
    review:
      "Amazing clothing store! Great quality and the styles are so trendy. Definitely my favorite place to shop.",
    instagram: "https://www.instagram.com",
  },
  {
    id: 2,
    name: "John Doe",
    review:
      "Fast delivery and excellent service. The clothes fit perfectly and look just like in the photos!",
    instagram: "https://www.instagram.com",
  },
  {
    id: 3,
    name: "Maria Garcia",
    review:
      "I love the variety of options and the affordable prices. Will definitely recommend to my friends!",
    instagram: "https://www.instagram.com",
  },
  {
    id: 4,
    name: "James Brown",
    review:
      "Great customer service and top-notch quality. I’ve been a loyal customer for years!",
    instagram: "https://www.instagram.com",
  },
  {
    id: 5,
    name: "Emily Davis",
    review:
      "The designs are unique and the material is excellent. Highly recommend this store!",
    instagram: "https://www.instagram.com",
  },
  {
    id: 6,
    name: "Michael Wilson",
    review:
      "Fantastic experience! The clothes are stylish, comfortable, and durable. Love this brand!",
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
      <h2 className="section-title">What Our Customers Say</h2>
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
