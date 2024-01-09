// import "CSS/MainHeader.css";
import { useContext, useState, useRef } from "react";
import { Nav } from "./Nav.jsx";
import { Slider } from "./Slider.jsx";
import { Header } from "./header.jsx";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import "./CSS/MainStory.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Portfolio } from "./Portfolio.jsx";
import { Footer } from "./Footer.jsx";
import { Contact } from "./contact.jsx";
import { SingleProject } from "./SingleProject.jsx";
import FontsCSS from "./CSS/fonts.module.css";
import SoftwareCard from "./SoftwareCard.jsx";

const About = () => {
  const { theme, readableColor, color1, color2 } = useColorTheme();
  console.log(color1);

  return (
    <div>
      <div
        className="MainContentContainer"
        style={{ backgroundColor: theme, color: readableColor }}
      >
        <div className="mainArticle">
          <h1 className="mainTitle">
            berkay <span className="mainTitleSpan">erdemir.</span>
          </h1>
          <p className="mainDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            possimus sed saepe dolor quibusdam quae animi corrupti iste error
            iusto, illum et. Ab, repellat sint iure ea architecto qui quod.
          </p>
          <Slider isVertical={false} hasEffect={true} isRelative={true} />
        </div>
        <Slider
          isVertical={true}
          hasEffect={false}
          offsetLeft={"80%"}
          isRelative={false}
          sliderHeight={"35%"}
        />
      </div>

      <div
        className="main-story-container"
        style={{ color: `rgb(${color2.join(",")})` }}
      >
        <div className="main-story-article">
          <video
            className="main-video"
            loop
            autoPlay
            muted
            src="../../images/ShowreelFiverr.mp4"
            alt=""
          />
          <div className="main-story-content">
            <h1 className={`main-story-title ${FontsCSS.regular}`}>
              how I started to like <br />
              <span className={`${FontsCSS.yellow} ${FontsCSS.boldOblique}`}>
                motion graphics
              </span>{" "}
              and <span className={`${FontsCSS.boldOblique}`}>vfx</span>
            </h1>
            <p className="main-story-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dignissimos atque mollitia quisquam eaque, dolores accusamus hic
              voluptas vero quis ex quas quidem, asperiores id. Esse alias
              dolorum impedit optio.
            </p>
          </div>
        </div>
      </div>

      <div className="education-container" style={{ backgroundColor: theme }}>
        <Slider
          isVertical={true}
          offsetLeft={"50%"}
          isRelative={true}
          sliderHeight={"100px"}
          BallPos={100}
        />
        <h1 className="education-title" style={{ color: readableColor }}>
          my education
        </h1>
        <div className="education-line" />
        <div className="education-content-container">
          <div className="education-content">
            <h2 className="education-school">erasmus hogeschool brussels</h2>
            <h3 className="education-direction">
              <span className="bold">multimedia</span> &{" "}
              <span className="bold"> creative technologies</span>
            </h3>
            <p className="education-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              nam consequuntur accusantium, repellendus id non minus eos
              aliquam, dolor aut enim eius ad! Quo architecto, cumque dolorem ab
              fugit officiis! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Provident quod, eveniet laboriosam sequi ducimus
              at delectus, necessitatibus corrupti sunt cumque esse! Neque iure
              soluta magnam laborum dolore? Harum, temporibus cupiditate.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              cumque esse similique atque, saepe perspiciatis impedit error,
              odit id maiores blanditiis eaque modi minima iure amet dicta, nemo
              natus aliquid!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis iure ex exercitationem ducimus repellendus cumque cum
              libero reprehenderit sed dignissimos fugit facilis assumenda magni
              labore numquam hic atque, maiores dicta?
            </p>
            <img className="education-img" src="../images/ehb.png" alt="" />
          </div>
        </div>
      </div>

      <div
        className="softwares-container"
        style={{ backgroundColor: theme, color: readableColor }}
      >
        <div className="softwares-content">
          <h1>
            <span className="bold">softwares</span>
            <span className="light"> i use</span>
          </h1>
          <hr />
        </div>
        <div className="softwares-logo">
          <SoftwareCard logoSrc={"../images/ehb.png"} softwareName={"ehb"} />
          <SoftwareCard
            logoSrc={"../images/blenderlogo.png"}
            softwareName={"blender"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "",
        element: <About />,
      },
      {
        path: "Home",
        element: <About />,
      },
      {
        path: "portfolio",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            path: "",
            element: <Portfolio />,
          },
          {
            path: ":id",
            element: <SingleProject />,
          },
        ],
      },
      {
        path: "contact",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            path: "",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
