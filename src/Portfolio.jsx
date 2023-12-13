import React from "react";
import { Logo } from "./Logo.jsx";
import { Nav } from "./Nav.jsx";
import { Socials } from "./Socials.jsx";
import "./CSS/MainHeader.css";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { Outlet } from "react-router-dom";

export function Portfolio() {
  const { theme, readableColor } = useColorTheme();

  return (
  <>
    <div className="Pf-main-container">
        <h1>Some of my <span className="bold">Projects.</span></h1>
        <div className="pf-main-content">
            <ul>
                <li><a href=""><img src="../images/berkayshowreelimg.png" alt="" /></a></li>
                <li><a href=""><img src="../images/berkayshowreelimg.png" alt="" /></a></li>
            </ul>
        </div>
    </div>
  </>
  );
}
