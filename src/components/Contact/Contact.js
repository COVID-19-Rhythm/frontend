import React from "react";
import Contactheader from "../Contactheader/Contactheader";
import "./contact.css";
import contact from "../images/contact.png";

function Contact() {
  const handleInput = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Contactheader />

      <div className="contact">
        <img src={contact} alt="contact" className="imageStyle" />
        <div className="formParent">
          <form className="formStyle">
            <div className="contactForm">
              <div className="contactName">
                Name
                <input
                  name="name"
                  onChange={(e) => handleInput(e)}
                  placeholder="name"
                />
              </div>

              <div className="contactEmail">
                Email
                <input
                  type="email"
                  name="email"
                  onChange={(e) => handleInput(e)}
                  placeholder="email"
                />
              </div>
              <div className="contactMessage">
                Message
                <textarea
                  type="text"
                  name="message"
                  onChange={(e) => handleInput(e)}
                  placeholder="leave a message!"
                />
              </div>
              <button
                className="contactButton"
                classNaonClick={(e) => handleSubmit(e)}
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
