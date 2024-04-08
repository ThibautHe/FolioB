import { useNavigate, useParams } from "react-router-dom";
import "./CSS/PortfolioPages/singlepage.css";
import { useState } from "react";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { Footer } from "./Footer.jsx";
import FontsCSS from "./CSS/fonts.module.css";
import loadcall, { applyOpacity } from "./ImgSlider.js";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedDiv } from "./Components/AnimatedDiv.jsx";
import useNextProject from "./Hooks/useNextProject.jsx";
import SoftwareCard from "./SoftwareCard.jsx";
import UnitySvg from "./Components/Svg/UnitySvg.jsx";
import ReactSvg from "./Components/Svg/ReactSvg.jsx";
import GithubSvg from "./Components/Svg/GithubSvg.jsx";
import CsharpSvg from "./Components/Svg/CsharpSvg.jsx";

export function SingleProject() {
  const { theme, readableColor } = useColorTheme();

  useEffect(() => {
    loadcall();
  }, []);

  const Softwares = {
    unity: { id: 1, logoSrc: <UnitySvg />, softwareName: "Unity", type: "svg" },
    react: { id: 2, logoSrc: <ReactSvg />, softwareName: "React", type: "svg" },
    github: {
      id: 3,
      logoSrc: <GithubSvg />,
      softwareName: "Github",
      type: "svg",
    },
    csharp: { id: 4, logoSrc: <CsharpSvg />, softwareName: "C#", type: "svg" },
  };
  const Projects = [
    {
      id: 1,
      name: "Unity - Internship",
      categorie: "Unity",
      img: "/fishing/CORSAIRS01.png",
      showcaseImg: [
        "/fishing/CORSAIRS02.png",
        "/fishing/CORSAIRS03.png",
        "/fishing/CORSAIRS04.png",
        "/fishing/CORSAIRS05.png",
      ],
      softwareUsed: [Softwares.github, Softwares.csharp, Softwares.unity],
      description:
        "The final test of my bachelor was an internship, where I got the opportunity to go work at fishing cactus, One of the biggest Gaming company in belgium. I was there as a Gameplay developper where I assisted the team in every part of the development, such as the meetings the development and their workflow. It was a very enriching experience. I'm very gratefull for this opportunity",
      probleme:
        "At Fishing I worked for a good month only on bugfixing to get the hang of it. I consistantly faced new and different bugs and for the first time I had to find my way through a codebase that I didnt wrote myself. Later I went on to develop my own upgrade systeme that would empower the player. It was also very enriching for me because I had to work in combination with code all over the codebase.",
      solution:
        "What I learned from this experience was that I had still alot to learn, and that things rarely goes as quickly as we would expect. I learned to work in a team and also to follow a workflow, on top of that I learned to use github more effectively. After my internship I immediatly made a list of some topics in which I had to improve.",
      link: "",
    },
    {
      id: 2,
      name: "web - New Portfolio",
      categorie: "web",
      img: "/folioT/folioT.jpg",
      showcaseImg: ["/folioT/folioT2.jpg", "/folioT/folioT3.jpg"],
      softwareUsed: [Softwares.github, Softwares.react],
      description:
        "This is the latest project I started, I wanted to challenge myself to learn now techs and with that going out of my comfort zone.",
      probleme:
        "making a website in React but this time by using TypeScript, I've been working alot with C# and I liked the way you had to define every type, That's why I felt attracted by Typescript. Secondly, I wanted to explore new features, I want to do it by implementing evey piece of other websites that I like.",
      solution:
        "I worked with Typescript inside the React framework. The project is still ongoing tho and I plan on updating the website every weekend, I want to add alot of interaction and animations. I would also want to create a CMS for this website. This would primarly be to train my backend skill which is currently not where I would like it to be.",
      link: "",
    },
    {
      id: 3,
      name: "Project - Final Project",
      categorie: "Unity",
      img: "/finalproject/pfolio_gameplay.png",
      showcaseImg: [
        "/finalproject/pfolio_menu.png",
        "/finalproject/pfolio_upgrade.png",
        "/finalproject/pfolio_upgradesMenu.png",
      ],
      softwareUsed: [Softwares.unity, Softwares.github, Softwares.csharp],
      description:
        "It was my school final project where the goal was to make a highly replayable game, We worked in a team of 2 for this project, We went for a fps game where the player would advance from room to room, where at the end of each room he would collect a new upgrade.",
      probleme:
        "I faced alot of problemes while working on this project, the first I can remember of is making the upgrade systeme, meanwhile my colleague focused on the movements and shooting of the game. So for the upgrades I had to find a scalable solution. I had to find a solution to be able to add more upgrades but also for the palyer to receive more upgrades of the same kind, that would make that specific power stronger.",
      solution:
        "the second challenge I faced was the procedural map, and handle the round start in thoses maps. I also wrote the code for spawning the ennemies. which had to be include in the procedural maps, Ultimately we went for semi procedural maps. one of the most difficult part was handling the navmesh for the ennemies between each map.",
    },
    {
      id: 4,
      name: "Unity - First project",
      categorie: "Unity",
      img: "/rpggame/rpgGame.png",
      showcaseImg: ["/rpggame/rpgGame2.png", "/rpggame/rpgGame3.png"],
      softwareUsed: [Softwares.unity, Softwares.csharp],
      description:
        "This project is one of my first ones, nothing impressive, It was my first steps into learning game development, I just want to show it to show a bit of the path I took",
      probleme:
        "Well at that point everything was kind of a probleme for me, I struggled with pretty much every bit of the demo.",
      solution:
        "What I realised was the lack of knowledge I had in differents aspect such as physics, movements, animations, and systemes architechtures. I'm happy to now be more comfortable within all theses topics even tho I know there will always be more to learn",
    },
    {
      id: 5,
      name: "Web - Worms",
      categorie: "Web",
      img: "/worms/pfolio-web-worms1.png",
      showcaseImg: [
        "/worms/pfolio-web-worms3.png",
        "/worms/pfolio-web-worms2.png",
      ],
      softwareUsed: [Softwares.github],
      description:
        "This project was made in the context of a school task. For this task I chosed to do a website of a game that I liked so I went for Worms. The design is obviously highly inspired by the worms world.",
      probleme:
        "So this website was kinda simple and in my comfort zone, except I had to implement some more niche features, like permanent animation or using a grid which I was not so used to yet.",
      solution:
        "I worked with plain html css, I didnt used any frameworks for this project. The hardest part of the project to me was finding a design. I also had to make it responsive",
      link: "",
    },
  ];

  const { id } = useParams();
  const [project, setProject] = useState(
    Projects.find((p) => p.id === parseInt(id))
  );
  const [mainImg, setMainImg] = useState(project.img);
  const [secondaryImg, setSecondaryImg] = useState(project.showcaseImg);
  const { nextProject } = useNextProject(Projects, id);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the project based on the ID
    const foundProject = Projects.find((proj) => proj.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
      setMainImg(foundProject.img);
      setSecondaryImg(foundProject.showcaseImg);
    }
  }, [id]);

  useEffect(() => {
    // Apply opacity effect when secondary images change
    applyOpacity();
  }, [secondaryImg]);

  const handleImgClicked = (clickedImg) => {
    setMainImg(clickedImg);
    setSecondaryImg((prevImages) => {
      // Remove clickedImg from secondary images
      const updatedSecondary = prevImages.filter((img) => img !== clickedImg);
      // Add the current mainImg to secondary images
      updatedSecondary.unshift(mainImg);
      return updatedSecondary;
    });
  };

  const handleNextProjectClicked = () => {
    if (nextProject) {
      navigate(`/portfolio/${nextProject.id}`);
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <div
        draggable="false"
        className="content-container"
        style={{ backgroundColor: theme }}
      >
        <div className="project-title">
          <h2
            className={`project-title-category-name ${FontsCSS.regularOblique}`}
          >
            {project.categorie}
          </h2>
          <h1 className={`project-title-name ${FontsCSS.boldFont}`}>
            {project.name}
          </h1>
        </div>
        <div className="project-images">
          <motion.div
            className="main-img"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.img
              key={mainImg}
              animate={{ scale: [1, 0.8, 1] }}
              transition={{ ease: "easeIn", duration: 0.4 }}
              draggable="false"
              src={mainImg}
              alt=""
            />
          </motion.div>
          <div className="img-slider-container">
            <motion.div
              whileInView={{ opacity: [0, 1], y: [-50, 0] }}
              transition={{ duration: 1 }}
              id="image-track"
              draggable="false"
              className="other-images"
              data-mouse-down-at="0"
              data-prev-percentage="0"
              data-percentage="0"
            >
              {secondaryImg.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    className="image"
                    key={img}
                    draggable="false"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleImgClicked(img);
                    }}
                    src={img}
                    alt=""
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <section className="project-about-container">
        <AnimatedDiv className="project-div project-about-title">
          <h1 className={`${FontsCSS.regular}`}>
            About the{" "}
            <span className={`${FontsCSS.yellow} ${FontsCSS.regularOblique}`}>
              project.
            </span>
          </h1>
        </AnimatedDiv>
        <div className="project-div project-description">
          <p style={{ color: { readableColor } }}>{project.description}</p>
        </div>
      </section>

      <section style={{ backgroundColor: theme }}>
        <AnimatedDiv className="softwares-logo" staggerchildrens={true}>
          {project.softwareUsed.map((software, index) => (
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
      </section>
      <section
        style={{ backgroundColor: theme }}
        className="project-problems-container"
      >
        <div className="project-problems">
          <h1>Problems I faced</h1>
          <p>
            {project.probleme}
            <br />
            <br />
            {project.solution}
          </p>
        </div>
      </section>
      {/*
      <section
        className="project-extra-container"
        style={{ backgroundColor: theme }}
      >
        <div className="proj-text">
          <h1>
            and a cool <span className={FontsCSS.boldOblique}>magazine</span>
          </h1>
        </div>
        <div className="project-extra-content">
          <AnimatedDiv
            className="img-extra-content"
            style={{ float: "right", position: "relative" }}
          >
            <img
              src="https://picsum.photos/300/400"
              alt=""
              style={{ border: "2px solid black", padding: "5px" }}
            />
            <input type="button" value="Download" className="DL-btn" />
          </AnimatedDiv>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis voluptas illo perferendis quaerat, doloribus nulla
              animi quia cupiditate suscipit assumenda voluptate? Vero iusto
              natus culpa provident voluptatem vel maiores earum.
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              ipsum alias pariatur praesentium odit debitis exercitationem
              ducimus voluptatem itaque quod nulla explicabo ea soluta a
              temporibus deleniti eaque, eos consequuntur.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              officia maxime minus fuga laboriosam cum quas et, facere
              quibusdam, saepe vel voluptatem magni, iste at molestiae
              temporibus iure ullam sequi.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est
              magnam itaque temporibus hic dignissimos sequi iste labore optio
              nihil. Quibusdam laudantium dicta ut assumenda recusandae
              molestias ipsum? Cum, commodi.
            </p>
          </div>
        </div>
      </section>
      */}
      <section
        className="nextProject"
        style={{ "--nextProjectImg": `url(${nextProject.img})` }}
        onClick={handleNextProjectClicked}
      >
        <h1 className={`nextProjectTitle ${FontsCSS.boldFont}`}>
          NEXT PROJECT
        </h1>
      </section>
      <Footer />
    </>
  );
}
