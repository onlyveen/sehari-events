import React, { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div id="nav" className={`navbar ${navOpen ? "opened" : "closed"}`}>
      <div className="container">
        <a href="/#home" className="logo">
          <img src="/logo.svg" alt="S Enterprisess" />
        </a>
        <div
          id="hamburger"
          onClick={() => setNavOpen(!navOpen)}
          className={`hamburglar ${navOpen ? "is-closed" : "is-open"}`}
        >
          <div id="top" />
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
          >
            <path
              id="circle"
              fill="none"
              stroke-width="4"
              stroke-miterlimit="10"
              d="M16,32h32c0,0,11.723-0.306,10.75-11
                                                                             c-0.25-2.75-1.644-4.971-2.869-7.151C50.728,7.08,42.767,2.569,33.733,2.054C33.159,2.033,32.599,2,32,2C15.432,2,2,15.432,2,32
                                                                             c0,16.566,13.432,30,30,30c16.566,0,30-13.434,30-30C62,15.5,48.5,2,32,2S1.875,15.5,1.875,32"
            />
          </svg>
          <div id="bottom" />
        </div>
        <ul className="menu" onClick={() => setNavOpen(false)}>
          <li>
            <a href="/#products">Products</a>
          </li>
          <li>
            <a href="/#About">About</a>
          </li>

          <li>
            <a className="btn" href="tel:+918500892925">
              Contact
            </a>
          </li>
        </ul>
        {/* <ul className="soci">
          <li>
            <a href="https://maps.app.goo.gl/kkUpTRLgvxX5Nmh1A" target="_blank">
              <img src="pin.svg" alt="Address | S Enterprisess" />
            </a>
          </li>
          <li>
            <a href="mailto:SEnterprises0023@gmail.com">
              <img src="mail_ico.svg" alt="Email | S Enterprisess" />
            </a>
          </li>
          <li>
            <a href="tel:+918500892925">
              <img src="call_ico.svg" alt="Call | S Enterprisess" />
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Nav;
