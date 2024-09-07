import React, { useEffect, useState } from "react";
import { fetchLinks } from "./links";

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
        <div className="left">
          <h1>
            We turn your <p className="prp">Moments</p> into <p>Celebrations</p>
          </h1>
          <a
            className="btn btn--white btn--lined"
            href={`tel:+91${links.phone?.value}`}
          >
            Celebrate
          </a>
        </div>
        <div className="right">
          <img src="./headerImg.png" />
        </div>
      </div>
      <img className="lower" src="./headerLower.svg" />
    </div>
  );
};

export default Header;
