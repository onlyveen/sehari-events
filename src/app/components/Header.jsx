import React, { useEffect, useState } from 'react';
import { fetchLinks } from './links';
  
  
    const Header = () => {
  const [links, setLinks] = useState({});


  useEffect(() => {
    const getLinks = async () => {
      const data = await fetchLinks();
      setLinks(data);
    };

    getLinks();
  }, []);

  return (
    <div id="header" className="topMost">
      <div className="HContainer container">
        <h1>We turn your Moments
        into <p>Celebrations</p></h1>
        <a className='btn btn--white btn--lined' href={`tel:+91${links.phone?.value}`}>Celebrate</a>
        {/* <p>At Sehari Events, we craft intimate, memorable experiences with personalized attention, ensuring your cozy birthday, social gathering, themed event, or small-scale party is exactly as you envisioned—perfect in every way.</p> */}
      </div>
        <img className="deskOnly" src="./headerLower.png"/>
        <img className="mobOnly" src="./headerLower.svg"/>
        <img className="abs" src="./headerBG.svg"/>
    </div>
  );
};

export default Header;
