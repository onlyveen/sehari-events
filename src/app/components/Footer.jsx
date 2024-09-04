import React, { useEffect, useState } from 'react';
import { fetchLinks } from './links';

const Footer = () => {
  const [links, setLinks] = useState({});
  const currentYear = new Date().getFullYear();


  useEffect(() => {
    const getLinks = async () => {
      const data = await fetchLinks();
      setLinks(data);
    };

    getLinks();
  }, []);

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
    
        {links.address && (<div className="cols soci">
          <div className="addr">
            <img src={links.address?.image} alt="address | Sehari Events" />
            <p>{links.address?.value}</p>
          </div>
          <p>
            <a href={`tel:+91${links.phone?.value}`}>
              <img src={links.phone?.image} alt="Call | Sehari Events" />
              <span>+91 - {links.phone?.value}</span>
            </a>
          </p>
    
          <p>
            <a href={`mailto:${links.email?.value}`} target="_blank" rel="noopener noreferrer">
              <img src={links.email?.image} alt="mail | Sehari Events" />
              <span>{links.email?.value}</span>
            </a>
          </p>
          <p className="dlexit">
            {links.youtube?.value && (
              <a href={links.youtube.value} target="_blank" rel="noopener noreferrer">
                <img src={links.youtube.image} alt="Youtube | Sehari Events" />
              </a>
            )}
            {links.linkedin?.value && (
              <a href={links.linkedin.value} target="_blank" rel="noopener noreferrer">
                <img src={links.linkedin.image} alt="LinkedIn | Sehari Events" />
              </a>
            )}
            {links.instagram?.value && (
              <a href={links.instagram.value} target="_blank" rel="noopener noreferrer">
                <img src={links.instagram.image} alt="Instagram | Sehari Events" />
              </a>
            )}
            {links.facebook?.value && (
              <a href={links.facebook.value} target="_blank" rel="noopener noreferrer">
                <img src={links.facebook.image} alt="Facebook | Sehari Events" />
              </a>
            )}
          </p>
        </div>)}
      </div>
      <p className="footNote">© 2022 - {currentYear} Sehari Events. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
