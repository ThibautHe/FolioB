import React from "react";
import { Footer } from "./Footer.jsx";
import { Header } from "./header.jsx";
import "./CSS/contact.css";
import { useState } from "react";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";

export function Contact() {
  const { theme } = useColorTheme();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
  });
  const [submitColor, setSubmitColor] = useState(theme);

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

  const handleMouseEnter = (e) => {
    setSubmitColor("black");
  };
  const handleMouseLeave = (e) => {
    setSubmitColor(theme);
  };

  return (
    <>
      <div className="contact-container" style={{ backgroundColor: theme }}>
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
              <div className="name-input-div">
                <label htmlFor="">Name</label>
                <input
                  className="name-input"
                  style={{ backgroundColor: theme }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="name-input-div">
                <label htmlFor="">email</label>
                <input
                  className="name-input"
                  style={{ backgroundColor: theme }}
                  type="text"
                  name="email"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <textarea
                style={{ backgroundColor: theme, width: "50%" }}
                rows="5"
                cols="33"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="This is the default comment..."
              ></textarea>
              <input
                className="submit-btn"
                type="submit"
                value="Send"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundColor: submitColor,
                }}
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
