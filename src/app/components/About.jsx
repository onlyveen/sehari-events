import React from "react";

const About = () => {
  const slideData = ["sl1", "sl2", "sl3", "sl4", "sl5"];
  return (
    <div id="About">
      <div className="aboutText" id="about">
        <div className="container">
          <div className="r1">
            <div>
              <img src="./about.png" />
            </div>
            <div>
              <h3>About S Enterprises</h3>
              <p>
                Welcome to S Enterprises - Your ultimate solution for all
                electrical needs! We provide safe, strong, and smart solutions
                including motors, gearbox, pumps, VFDs, and switchgear. As
                authorized dealers for Fine Cab and El Max, we offer top-quality
                products ensuring reliability and efficiency. Trust us for all
                your electrical requirements.
              </p>
            </div>
          </div>
          <div className="r2">
            <div className="c c1">
              <h4>Why Choose Us?</h4>
            </div>
            <div className="c c2">
              <img src="./safety.svg" />
              <h5>Safety</h5>
              <p>
                With a steadfast commitment to safety, we ensure that every
                product adheres to the highest industry standards, providing you
                with peace of mind.
              </p>
            </div>
            <div className="c c3">
              <img src="./quality.svg" />
              <h5>Quality</h5>
              <p>
                Our dedication to excellence is reflected in the superior
                craftsmanship of our motors, gearbox, pumps, VFDs, and
                switchgear, promising reliability and longevity.
              </p>
            </div>
            <div className="c c4">
              <img src="./affordability.svg" />
              <h5>Affordability</h5>
              <p>
                We believe that premium quality shouldn't come with a premium
                price tag. That's why we offer cost-effective solutions that fit
                your budget without compromising on performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
