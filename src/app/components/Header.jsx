const Header = () => {
  return (
    <div id="header" className="topMost">
      <div className="HContainer container">
        <h1>We turn your Moments
        into <p>Celebrations</p></h1>
        {/* <p>At Sehari Events, we craft intimate, memorable experiences with personalized attention, ensuring your cozy birthday, social gathering, themed event, or small-scale party is exactly as you envisioned—perfect in every way.</p> */}
      </div>
        <img className="deskOnly" src="./headerLower.png"/>
        <img className="mobOnly" src="./headerLower.svg"/>
    </div>
  );
};

export default Header;
