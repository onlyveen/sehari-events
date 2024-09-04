import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const images = [
    "./gallery/1.png",
    "./gallery/2.png",
    "./gallery/3.png",
    "./gallery/4.png",
    "./gallery/5.png",
    "./gallery/6.png",
    "./gallery/7.png",
    "./gallery/8.png",
    "./gallery/9.png",
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3, // Number of images to show at once
    slidesToScroll: 1, // Number of images to scroll at once
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    speed: 3000, // Time to scroll
    cssEase: "linear", // Linear scroll effect
    variableWidth: true, // Enables different widths for images
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ height: "350px", width: "auto" }} // Same height, different width
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
