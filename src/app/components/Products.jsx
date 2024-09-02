import React from "react";

const Products = () => {
  return (
    <div className="products">
      <div className="container container1">
        <h3>Our Products</h3>
        <div className="prods">
          <div className="prodItem">
            <img src="./Pumps.png" />
            <p>Pumps</p>
          </div>
          <div className="prodItem">
            <img src="./Motors.png" />
            <p>Motors</p>
          </div>
          <div className="prodItem">
            <img src="./Gearbox.png" />
            <p>Gearbox</p>
          </div>
          <div className="prodItem">
            <img src="./VFDSwitchGear.png" />
            <p>VFD & SwitchGear</p>
          </div>
        </div>
      </div>
      <div className="container container2">
        <h3>Authorised Dealer for Sales</h3>
        <div className="cols">
          <div className="c c1">
            <h5>Havells</h5>
            <p>
              Havells India Limited is a leading FMEG company offering a wide
              range of innovative electrical products for consumers, industries,
              and businesses. With a commitment to quality, sustainability, and
              global presence, Havells continues to be a trusted name in the
              industry.
            </p>
            <img src="./havells.png" alt="Havells" />
          </div>
          <div className="c c2">
            <h5>elmex</h5>
            <p>
              Elmex is a renowned electrical component manufacturer, providing
              high-quality products for diverse applications. With a focus on
              innovation and reliability, Elmex serves global markets, earning
              trust through its commitment to excellence and customer
              satisfaction.
            </p>
            <img src="./elmex.png" alt="elemex" />
          </div>
          <div className="c c3">
            <h5>Finecab</h5>
            <p>
              Finecab is a prominent manufacturer of electrical wires and
              cables, offering a comprehensive range for residential,
              commercial, and industrial use. Renowned for quality and
              reliability, Finecab's products meet international standards,
              making it a trusted choice worldwide.
            </p>
            <img src="./finecab.png" alt="Fincab" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
