import React from "react";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="container">
        <div className="cols logo">
          <img src="/logo-box.svg" alt="S Enterprisess" />
        </div>
        <div className="cols info">
          <h3>S Enterprisess</h3>
          <p>
            #6-81-128, Revenue Ward 60, <br />
            Visweswaraya Nagar, Near D Mart, <br />
            Sri Nagar, Visakhapatnam, <br />
            Andhra Pradesh - 530026
          </p>
        </div>
        <div className="cols soci">
          <p>
            <a href="tel:+918500892925">
              <img src="call_ico.svg" alt="Call | S Enterprisess" />
              <span>8500892925</span>
            </a>
          </p>
          <p>
            <a href="mailto:SEnterprises0023@gmail.com" target="_blank">
              <img src="mail_ico.svg" alt="Call | S Enterprisess" />
              <span>SEnterprises0023@gmail.com</span>
            </a>
          </p>
          <p className="dlexit">
            <a href="https://www.youtube.com" target="_blank">
              <img src="youtube_ico.svg" alt="Youtube | S Enterprisess" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src="instagram_ico.svg" alt="Instagram | S Enterprisess" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
