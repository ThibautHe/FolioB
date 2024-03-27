// import "CSS/MainHeader.css";
import { useContext, useState, useRef, useEffect, forwardRef } from "react";
import { Nav } from "./Nav.jsx";
import { Slider } from "./Slider.jsx";
import { Header } from "./Header.jsx";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import "./CSS/MainStory.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Portfolio } from "./Portfolio.jsx";
import { Footer } from "./Footer.jsx";
import { Contact } from "./contact.jsx";
import { SingleProject } from "./SingleProject.jsx";
import FontsCSS from "./CSS/fonts.module.css";
import SoftwareCard from "./SoftwareCard.jsx";
import { AnimatedDiv } from "./Components/AnimatedDiv.jsx";
import { motion } from "framer-motion";
import UnitySvg from "./Components/Svg/UnitySvg.jsx";
import ReactSvg from "./Components/Svg/ReactSvg.jsx";
import GithubSvg from "./Components/Svg/GithubSvg.jsx";
import CsharpSvg from "./Components/Svg/CsharpSvg.jsx";

const About = () => {
  const { theme, readableColor, color1, color2 } = useColorTheme();
  const softwareData = [
    {
      id: 1,
      logoSrc: <UnitySvg />,
      softwareName: "Unity",
      type: "svg",
    },
    {
      id: 2,
      logoSrc: <ReactSvg />,
      softwareName: "React",
      type: "svg",
    },
    {
      id: 3,
      logoSrc: <GithubSvg />,
      softwareName: "Github",
      type: "svg",
    },
    {
      id: 4,
      logoSrc: <CsharpSvg />,
      softwareName: "C#",
      type: "svg",
    },
    // Add more software data as needed
  ];
  return (
    <div>
      <div
        className="MainContentContainer"
        style={{ backgroundColor: theme, color: readableColor }}
      >
        <div className="mainArticle">
          <h1 className="mainTitle">
            Thibaut <span className="mainTitleSpan">Hellinckx.</span>
          </h1>
          <p className="mainDescription">
            I'm a young graduate passionated about development, I've been busy
            on different fields such as web development aswell as game
            development. In my free time I like to code play video games and
            prepare my future hollidays to Japan !
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
          <div className="main-story-video-div">
            <video
              className="main-video"
              loop
              autoPlay
              muted
              src="../../images/finalproject/trailerFinalwork.mp4"
              alt=""
            />
          </div>
          <div className="main-story-content">
            <h1 className={`main-story-title ${FontsCSS.regular}`}>
              how I started to like <br />
              <span className={`${FontsCSS.yellow} ${FontsCSS.boldOblique}`}>
                Web
              </span>{" "}
              and <span className={`${FontsCSS.boldOblique}`}>Game dev</span>
            </h1>
            <p className="main-story-description">
              Ever since I can remember I've been playing video games, It has
              always been a mystery to me on how they were made, untill I
              started to learn more about the dev behind. After which it was
              even MORE a mystery, a mystery that I would love to explore.
              That's also what I did. Along my exploration I went to a school
              where I discovered general coding but also last but not least, Web
              development, This is where my love for web dev started too. I'm
              still to this day fascinated by everything possible on the web and
              I would love to explore this field even more.
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
              During my bachelor I got the opportunity to discover not only the
              development but also the design part. The studies were a fine line
              of balance between design and development. I would lie if I said
              that I didn't have my preferences. Indeed I felt way more
              comfortable with development than design. But I'm thankfull to
              know have at least some bases in design. Along the road we had to
              opportunity to chose a path. it wasnt possible to chose all of
              them so I chose the game development course along with the other
              courses where I could explore the mystery of how game were made
              that since kid kept me awake at night.
              <br />
              <br />
              What I mostly learned during these studies is that I'm far from
              knowing everything there is to know. I learned to learn, and to
              keep learning every day, that's what they called "lifelong
              learning". It was very autonmous learnig which wasnt always easy
              but at least I know now that it is possible.
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
          <div
            className="pf-hr grid-2-span-col"
            style={{ width: "40%", height: "1px" }}
          />
        </div>
        <AnimatedDiv className="softwares-logo" staggerchildrens={true}>
          {softwareData.map((software, index) => (
            <SoftwareCard
              key={software.id} // Add a unique key for each item in the array
              logoSrc={software.logoSrc}
              softwareName={software.softwareName}
              type={software.type}
              whileInView={{ y: [-50, 0] }}
              transition={{ delay: 0.2 + index * 0.1 }}
            />
          ))}
        </AnimatedDiv>
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
