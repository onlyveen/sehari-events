const Header = () => {
  return (
    <div id="header" className="topMost">
      <div className="HContainer container">
        <div className="left">
          <h1 className="theTitle">
            Solution
            <br />
            for all your
            <br />
            electrical needs
          </h1>

          <div className="actns">
            <a href="tel:+918500892925" className="btn ">
              <span>Contact us</span>
            </a>
            {/* <a
              href="https://maps.app.goo.gl/kkUpTRLgvxX5Nmh1A"
              target="_blank"
              className="btn"
            >
              <span>Get Directions</span>
              <img src="./map_ico.svg" alt="Get Directions to S Enterprisess" />
            </a> */}
          </div>
        </div>
        <div className="right">
          <img
            className="headerImg headerDesk"
            src="./header.png"
            alt="Your Trusted Partner in Vacuum Pump Solutions."
          />
          <img
            className="headerImg headerMob"
            src="./headerMob.png"
            alt="Your Trusted Partner in Vacuum Pump Solutions."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
