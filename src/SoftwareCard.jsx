import React, { useRef } from "react";

const SoftwareCard = ({ logoSrc, softwareName }) => {
  const logoTextRef = useRef(null);
  const logoRef = useRef(null);

  const handleHover = () => {
    const logo = logoRef.current;
    const logotext = logoTextRef.current;
    logotext.style.display = "block";

    if (logo) {
      logo.setAttribute("closing", "");
      logotext.setAttribute("opening", "");

      logo.addEventListener(
        "animationend",
        () => {
          logo.removeAttribute("closing");
          logo.style.display = "none";
        },
        { once: true }
      );
      logotext.addEventListener(
        "animationend",
        () => {
          logotext.style.display = "block";
          logotext.removeAttribute("opening");
        },
        { once: true }
      );
    }
  };

  const handleMouseLeave = () => {
    const logo = logoRef.current;
    const logotext = logoTextRef.current;
    logo.style.display = "block";

    if (logotext) {
      logo.setAttribute("opening", "");
      logotext.setAttribute("closing", "");

      logotext.addEventListener(
        "animationend",
        () => {
          logotext.removeAttribute("closing");
          logotext.style.display = "none";
        },
        { once: true }
      );
      logo.addEventListener(
        "animationend",
        () => {
          logo.style.display = "block";
          logo.removeAttribute("opening");
        },
        { once: true }
      );
    }
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className="software-card-container"
    >
      <div className="software-card-content">
        <div ref={logoRef} className="software-card-logo">
          <img src={logoSrc} alt="" style={{ width: "64px" }} />
        </div>
        <div ref={logoTextRef} className="software-card-text">
          <h1>{softwareName}</h1>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCard;
