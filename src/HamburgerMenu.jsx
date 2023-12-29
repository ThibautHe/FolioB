import { useContext, useState } from "react";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import "./CSS/HamburgerMenu.css";

export function HamburgerMenu() {
  const handleOnClick = (e) => {};
  return (
    <>
      <div className="menu" onClick={handleOnClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
