import React, { useEffect } from "react";
import "./CSS/MainHeader.css";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { NavLink, Outlet } from "react-router-dom";
import "./CSS/PortfolioPages/portfolio.css";
import { Footer } from "./Footer.jsx";

export function Portfolio() {
  const { theme, readableColor } = useColorTheme();
  const Projects = [
    {
      id: 1,
      name: "AeroDeco",
      img: "/aerodeco.png",
      video: "",
      description: "this is a placeholder description",
      isVideo: false,
    },
    {
      id: 2,
      name: "Corsairs",
      img: "/fishing/CORSAIRS01.png",
      video: "",
      description: "this is a placeholder description",
      isVideo: false,
    },
    {
      id: 3,
      name: "New Portfolio",
      img: "/folioT/folioT.jpg",
      video: "",
      description: "this is a placeholder description",
      isVideo: false,
    },
    {
      id: 4,
      name: "Unity - Final project",
      img: "",
      video: "/finalproject/trailerFinalwork.mp4",
      description: "this is a placeholder description",
      isVideo: true,
    },
    {
      id: 5,
      name: "Unity - first project",
      img: "",
      video: "/rpggame/trailerFirstGame.mp4",
      description: "this is a placeholder description",
      isVideo: true,
    },
    {
      id: 6,
      name: "worms",
      img: "/worms/pfolio-web-worms1.png",
      video: "",
      description: "this is a placeholder description",
      isVideo: false,
    },
  ];

  useEffect(() => {
    const videos = document.querySelectorAll(".video");

    videos.forEach((video) => {
      video.addEventListener("mouseenter", () => {
        video.play();
      });

      video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    });
  }, []);

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
                  <NavLink
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    to={`/portfolio/${project.id}`}
                  >
                    {project.isVideo ? (
                      <video
                        muted
                        className="pf-images video"
                        src={project.video}
                      />
                    ) : (
                      <img src={project.img} className="pf-images"></img>
                    )}
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
