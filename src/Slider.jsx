import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContextProvider, useColorTheme } from "./Hooks/useColorTheme.jsx";

export const Slider = ({isVertical,offsetLeft,hasEffect}) => {
  const [isDragging, setIsDragging] = useState(false);
  const { theme,readableColor, handleThemeChange, colorPercentage } = useColorTheme();
  const sliderRef = useRef(null);

  const DIVNAME = isVertical ? "vslider" : "slider";
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !hasEffect) {
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
      if (roundedValue === colorPercentage) {
        return;
      }
      handleThemeChange(roundedValue);
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
    if(!hasEffect) 
    {
      return;
    }

    e.preventDefault();
    setIsDragging(true);
  };


  return (
    <div style={{"left": offsetLeft}} className={`${DIVNAME}-container`}>
      <div ref={sliderRef} className={`${DIVNAME}`} onMouseDown={handleMouseDown} style={{backgroundColor:readableColor}}>
        <div className={`${DIVNAME}-ball`} style={{"left":`${colorPercentage}%`, backgroundColor:readableColor}}></div>
        <div className={`${DIVNAME}-ball-outline`} style={{"left":`${colorPercentage}%`, borderColor:readableColor}}></div>
      </div>
    </div>
  );
};
