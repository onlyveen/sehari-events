import React from "react";
import TypingText from "./TypingText.tsx";

const About = () => {
  const words = ["Planner", "Manager", "Organizer"];

  
  const serveData = [{title : "Birthdays",
    img : "BirthdaysBG",
    desc : "Celebrate your special day with close friends and family. We create warm and inviting birthday parties that are filled with joy and personal touches."
  },
  {title : "Themed",
    img : "ThemedBG",
    desc : "Bring your favorite theme to life with our creative event planning. From décor to activities, we ensure every detail matches your vision."
  },
  {title : "Gatherings",
    img : "GatheringsBG",
    desc : "Whether it’s a get-together with friends or a family reunion, we make sure your gathering is relaxed, enjoyable, and memorable."
  },
  {title : "Parties",
    img : "PartiesBG",
    desc : "Whether it’s a milestone celebration, a casual get-together, or an intimate gathering, we design and execute parties that make lasting memories."
  },
  {title : "Launches",
    img : "LaunchesBG",
    desc : "Whether it’s a get-together with friends or a family reunion, we make sure your gathering is relaxed, enjoyable, and memorable."
  },];
  
  return (
    <div id="About">
      <div className="aboutText" id="about">
        <div className="container">
          <h3 className="title">Event <TypingText words={words} typingSpeed={120} deletingSpeed={60} /></h3>
          <p>At Sehari Events, we specialize in crafting intimate and memorable experiences. Whether it’s a cozy birthday party, a small social gathering, or a fun-themed event, we are passionate about bringing your ideas to life. With our personalized approach and attention to detail, we ensure that your special day is just as you imagined—perfect in every way.</p>
        </div>
      </div>
      <div className="service">
        <div className="container">
          <div className="serviceItems">
            {serveData.map((service)=>(
              <div className="serviceItem">
                <img className="ico" src={`./services/${service.title}.svg`} alt={service.title}/>
                <img className="abs" src={`./services/${service.img}.svg`} alt={service.title}/>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
