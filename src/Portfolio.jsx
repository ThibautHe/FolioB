import React from "react";
import "./CSS/MainHeader.css";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { NavLink, Outlet } from "react-router-dom";
import "./CSS/PortfolioPages/Portfolio.css";
import { Footer } from "./Footer.jsx";

export function Portfolio() {
  const { theme, readableColor } = useColorTheme();
  const Projects = [
    {
      id: 1,
      name: "projet - vfx overload",
      img: "../images/berkayshowreelimg.png",
      description: "this is a placeholder description",
    },
    {
      id: 2,
      name: "anime montage",
      img: "../images/berkayshowreelimg.png",
      description: "this is a placeholder description",
    },
    {
      id: 3,
      name: "Fiverr",
      img: "../images/berkayshowreelimg.png",
      description: "this is a placeholder description",
    },
  ];

  return (
    <>
      <div className="pf-main-container" style={{ backgroundColor: theme }}>
        <h1 className="pf-main-title">
          Some of my <span className="bold">projects.</span>
        </h1>
        <div className="pf-main-content">
          <ul>
            {Projects.map((project, index) => (
              <>
                <li key={project.name}>
                  <NavLink to={`/portfolio/${project.id}`}>
                    <img className="pf-images" src={project.img} />
                  </NavLink>
                </li>
                {(index + 1) % 2 === 0 && (
                  <div
                    className="pf-hr grid-2-span-col"
                    style={{ width: "40%", height: "1px" }}
                  />
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
