import React from "react";
import { Logo } from "./Logo.jsx";
import { Nav } from "./Nav.jsx";
import { Socials } from "./Socials.jsx";
import './CSS/MainHeader.css'

export function Header() {
  const navItems = ["Home", "About me", "Contact"];
  const socials = ["insta", "fb", "linkdn"];
  return (
    <div className="MainHeader">
      <Logo />
      <Nav navs={navItems} />
      <Socials SocialsList={socials} />
    </div>
  );
}
