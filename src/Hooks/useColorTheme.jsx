import { createContext, useContext, useState } from "react";

const ColorThemeContext = createContext({
  color: "0,0,0",
  handleThemeChange: () => {},
});

export function useColorTheme() {
  const { color, handleThemeChange } = useContext(ColorThemeContext);
  return {
    theme: color,
    handleThemeChange,
  };
}
export function ThemeContextProvider({ children }) {
  //const [theme, setTheme] = useState(0);
  const color1 = [0, 0, 0];
  const color2 = [244, 223, 200];
  const [color, setColor] = useState("rgb(0,0,0)");
  const handleThemeChange = (value) => {
    //setTheme(() => value);
    setColor(lerpRGBColor(color1, color2, value / 100));
  };

  return (
    <ColorThemeContext.Provider value={{ color, handleThemeChange }}>
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
