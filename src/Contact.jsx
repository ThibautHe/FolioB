import React from "react";
import { Footer } from "./Footer.jsx";
import { Header } from "./header.jsx";
import "./CSS/contact.css";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission with formData
    console.log("Form submitted:", formData);
    alert("form has been submitted");
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-img">
            <div className="cimg">
              <img src="../images/berkayshowreelimg.png" alt="" />
              <div className="contact-info">
                <h1>Berkay erdemir</h1>
                <h1>0494 80 80 80</h1>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name..."
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <textarea
                rows="5"
                cols="33"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="This is the default comment..."
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>

      <div className="test">
        <div className="testdiv">
          <h1>aezaezaze</h1>
          <h1>azeaezeza</h1>
          <h1>azeaezaez</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
