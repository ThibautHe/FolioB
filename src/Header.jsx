import React from "react";
import { Logo } from "./Logo.jsx";
import { Nav } from "./Nav.jsx";
import { Socials } from "./Socials.jsx";
import "./CSS/MainHeader.css";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { Outlet } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu.jsx";

export function Header() {
  const navItems = ["Home", "Portfolio", "Contact"];
  const socials = ["insta", "fb", "linkdn"];
  const { theme, readableColor } = useColorTheme();

  return (
  <>
    <div className="MainHeader" style={{ backgroundColor: theme }}>
      <Logo />
      <Nav navs={navItems} />
      <HamburgerMenu/>
      <Socials SocialsList={socials} />
    </div>
  
    <div><Outlet/></div>
  </>
  );
}
