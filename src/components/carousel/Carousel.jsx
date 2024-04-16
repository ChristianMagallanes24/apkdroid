import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Cambia cada 2 segundos
    cssEase: "linear"
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Slider {...settings}>
        <div>
          <img src="https://pm1.aminoapps.com/6754/49480cdd522822d5faea27126cafd723780488e9v2_hq.jpg" alt="Imagen 1" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="https://www.fastpay.co.id/blog/wp-content/uploads/2023/10/oktober-week-1-artikel-7-800x300.png" alt="Imagen 2" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="https://gadgetmates.com/wp-content/uploads/2023/12/brawl-stars.png" alt="Imagen 3" style={{ width: "100%" }} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
