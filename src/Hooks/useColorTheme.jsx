import { createContext, useContext, useState } from "react";

const ColorThemeContext = createContext({
  
});

export function useColorTheme() {
  const { color, readableColor, handleThemeChange } = useContext(ColorThemeContext);
  return {
    theme: color,
    readableColor,
    handleThemeChange,
  };
}

export function ThemeContextProvider({ children }) {
  const color1 = [15, 12, 29];
  const color2 = [234, 215, 254];

  const [readableColor, setReadableColor] = useState(0);
  const [color, setColor] = useState(`rgb(${color2.join(",")})`);

  const handleThemeChange = (value) => {
    setReadableColor(() => {
      if (value < 50) {
        return `rgb(${color2.join(",")})`;
      } else {
        return `rgb(${color1.join(",")})`;
      }
    });
    setColor(lerpRGBColor(color1, color2, value / 100));
  };

  return (
    <ColorThemeContext.Provider
      value={{ color, readableColor, handleThemeChange }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
}

function lerpRGBColor(color1, color2, factor) {
  const result = color1.map((channel, index) => {
    return Math.round(channel + factor * (color2[index] - channel));
  });

  return `rgb(${result.join(",")})`;
}
