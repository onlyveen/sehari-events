import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <h2 className="theTitle">Get In Touch</h2>
        <form>
          <div className="input-wrapper">
            <div className="input">
              <label>Full Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="input">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="input">
              <label>Phone</label>
              <input type="email" />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="input">
              <label>Query</label>
              <input type="textarea" />
            </div>
          </div>
          <div className="input-wrapper">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
