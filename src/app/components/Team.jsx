import React from "react";
import Slider from "react-slick";

const Team = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const teamDetails = [
    {
      name: "DJ",
      img: "./team/team1.jpg",
    },
    {
      name: "Naveen",
      img: "./team/team2.jpg",
    },
    {
      name: "Ravi",
      img: "./team/team3.jpg",
    },
    {
      name: "Sky",
      img: "./team/team4.jpg",
    },
    {
      name: "Sumanth",
      img: "./team/team5.jpg",
    },
  ];
  return (
    <div id="team">
      <div className="container">
        <h1>Team</h1>
        <Slider {...settings}>
          {teamDetails.map((item) => (
            <div className="theSlider" key={item.name}>
              <img src={item.img} />
              <p className={`Team ${item.name}`}>{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
