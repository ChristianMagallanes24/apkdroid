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
          <img src="https://via.placeholder.com/800x300?text=Imagen+1" alt="Imagen 1" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300?text=Imagen+2" alt="Imagen 2" style={{ width: "100%" }} />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300?text=Imagen+3" alt="Imagen 3" style={{ width: "100%" }} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
