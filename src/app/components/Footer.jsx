import React from "react";


const Footer = () => {
  return (
    <div id="Footer">
      <div className="footTop">
        <div className="container">
          <h3 className="title">Let’s Celebrate Together 🎉</h3>
          <p>Ready to plan your next small-scale event? Contact us today, and let’s start working on a celebration that you and your guests will remember fondly. No matter the size of your gathering, we’re here to make it special.</p>
          <a href="" className="btn btn--white">Get in Touch</a>
        </div>
      </div>
      <div className="container griddo">
        <div className="cols logo">
          <img src="/logo-icon.svg" alt="Sehari Events" />
        </div>
        <div className="cols info">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Portofolio</a></li>
            <li><a href="">Team</a></li>
          </ul>
        </div>
        <div className="cols info">
          <h3>Support</h3>
          <ul>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Privacy policy</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">FAQs</a></li>
          </ul>
        </div>
    
        <div className="cols soci">
          <div className="addr">
              <img src="./map-sharp.svg" alt="address | Sehari Events" />
            <p>
              Sehari Events, 
              Address Line - 2, <br />
              Address Line - 3, 
              Address Line - 4
            </p>
          </div>
          <p>
            <a href="tel:+919876543210">
              <img src="./call.svg" alt="Call | Sehari Events" />
              <span>9876543210</span>
            </a>
          </p>
    
          <p>
            <a href="mailto:SEnterprises0023@gmail.com" target="_blank">
              <img src="mail.svg" alt="mail | Sehari Events" />
              <span>seharieventsbangalore@gmail.com</span>
            </a>
          </p>
          <p className="dlexit">
            <a href="https://www.youtube.com" target="_blank">
              <img src="yt.svg" alt="Youtube | Sehari Events" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img src="linkedIn.svg" alt="LinkedIn | Sehari Events" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src="insta.svg" alt="Instagram | Sehari Events" />
            </a>
          </p>
        </div>
      </div>
      <p className="footNote">© 2024 Sehari Events. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
