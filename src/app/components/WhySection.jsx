import React from "react";
import TypingText from "./TypingText.tsx";

const WhySection = () => {
  const whyData = [
    {
      title: "Personalized Service",
      desc: " We take the time to understand your preferences and tailor every aspect of the event to your style and needs.",
    },
    {
      title: "Creative Concepts",
      desc: "Our team loves bringing fresh and fun ideas to the table, ensuring your event is unique and memorable.",
    },
    {
      title: "Stress-Free Planning",
      desc: "We handle all the logistics, so you can focus on enjoying your celebration without any worries.",
    },
    {
      title: "Attention to Detail",
      desc: " From décor to the guest experience, we ensure that every element of your event is just right.",
    }
  ];

  return (
    <div id="Why">
      <img className="star" src="./star.png" />
      <img className="heart" src="./heart.png" />
      <div className="whyText" >
        <div className="container">
          <h3 className="title">
            Why Sehari Events?
          </h3>
         
          <div className="whyItems">
            {whyData.map((why) => (
              <div className="whyItem">
              
                <h4>{why.title}</h4>
                <p>{why.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default WhySection;
