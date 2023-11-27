// import "CSS/MainHeader.css";
import { useContext, useState } from "react";
import { Nav } from "./Nav.jsx";
import { Slider } from "./Slider.jsx";
import { Header } from "./header.jsx";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
export default function App() {
  const { theme } = useColorTheme();
  return (
    <>
      <Header />
      <div className="MainContentContainer" style={{ color: theme }}>
        <h1 className="mainTitle">
          berkay <span className="mainTitleSpan">erdemir.</span>
        </h1>
        <p className="mainDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          possimus sed saepe dolor quibusdam quae animi corrupti iste error
          iusto, illum et. Ab, repellat sint iure ea architecto qui quod.
        </p>
        <Slider />
      </div>
    </>
  );
}
