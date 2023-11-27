import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContextProvider, useColorTheme } from "./Hooks/useColorTheme.jsx";

export const Slider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [value, setValue] = useState(100);
  const [sliderBallStyle, setSliderBallStyle] = useState({ left: "100%" });
  const sliderRef = useRef(null);
  const { theme, handleThemeChange } = useColorTheme();

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
      setSliderBallStyle((prevStyle) => {
        const newStyle = { left: `${percentage}%` };
        return newStyle;
      });

      const roundedValue = Math.round(percentage);
      if (roundedValue === value) {
        return;
      }
      handleThemeChange(roundedValue);
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
      <div ref={sliderRef} className="slider" onMouseDown={handleMouseDown}>
        <div className="slider-ball" style={sliderBallStyle}></div>
        <div className="slider-ball-outline" style={sliderBallStyle}></div>
      </div>
      <p className="slider-value">{`${theme}`}</p>
    </div>
  );
};
