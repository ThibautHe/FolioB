import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContextProvider, useColorTheme } from "./Hooks/useColorTheme.jsx";

export const Slider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [value, setValue] = useState(100);
  const [sliderBallStyle, setSliderBallStyle] = useState({ left: "100%" });
  const sliderRef = useRef(null);
  const { theme,readableColor, handleThemeChange } = useColorTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) {
        return;
      }

      const sliderRect = sliderRef.current.getBoundingClientRect();
      let newPosition = e.clientX - sliderRect.left;

      if (newPosition < 0) {
        newPosition = 0;
      } else if (newPosition > sliderRect.width) {
        newPosition = sliderRect.width;
      }

      const percentage = (newPosition / sliderRect.width) * 100;
      
      const roundedValue = Math.round(percentage);
      if (roundedValue === value) {
        return;
      }
      handleThemeChange(roundedValue);
      
      setSliderBallStyle((prevStyle) => {
        const newStyle = percentage;
        return newStyle;
      });
      //setValue(roundedValue);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div className="slider-container">
      <div ref={sliderRef} className="slider" onMouseDown={handleMouseDown} style={{backgroundColor:readableColor}}>
        <div className="slider-ball" style={{"left":`${sliderBallStyle}%`, "background-color":readableColor}}></div>
        <div className="slider-ball-outline" style={{"left":`${sliderBallStyle}%`, "border-color":readableColor}}></div>
      </div>
      <p className="slider-value">{`${theme}`}</p>
    </div>
  );
};
