// import "CSS/MainHeader.css";
import { useContext, useState } from "react";
import { Nav } from "./Nav.jsx";
import { Slider } from "./Slider.jsx";
import { Header } from "./header.jsx";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import "./CSS/MainStory.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Portfolio } from "./Portfolio.jsx";

const About = () => {
  const { theme, readableColor } = useColorTheme();
  return (
    <>
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
          <Slider isVertical={false} hasEffect={true} />
        </div>
        <Slider isVertical={true} hasEffect={false} offsetLeft={'85%'} />
      </div>

      <div className="main-story-container">
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
            <h1 className="main-story-title">
              how I started to like <span>motion graphics</span> and{" "}
              <span>vfx</span>
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

      <div className="education-container">
        <Slider isVertical={true} offsetLeft={50}/>
        <h1 className="education-title">my education</h1>
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

      <div className="skills">
        <div className="skills-container">
          <div className="skill">
            <img
              className="skill-img"
              src="../images/aftereffectlogo.png"
              alt=""
            />
            <div className="skill-header">
              <h1 className="skill-title">compositing</h1>
              <p className="skill-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                unde hic quaerat perspiciatis facere provident temporibus porro
                repudiandae, soluta neque laboriosam commodi veniam debitis
                possimus consequuntur itaque asperiores quisquam sequi?
              </p>
            </div>
          </div>
          <div className="skill">
            <img
              className="skill-img"
              src="../images/aftereffectlogo.png"
              alt=""
            />
            <div className="skill-header">
              <h1 className="skill-title">after effects</h1>
              <p className="skill-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                unde hic quaerat perspiciatis facere provident temporibus porro
                repudiandae, soluta neque laboriosam commodi veniam debitis
                possimus consequuntur itaque asperiores quisquam sequi?
              </p>
            </div>
          </div>
          <div className="skill">
            <img
              className="skill-img"
              src="../images/aftereffectlogo.png"
              alt=""
            />
            <div className="skill-header">
              <h1 className="skill-title">teamplayer</h1>
              <p className="skill-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                unde hic quaerat perspiciatis facere provident temporibus porro
                repudiandae, soluta neque laboriosam commodi veniam debitis
                possimus consequuntur itaque asperiores quisquam sequi?
              </p>
            </div>
          </div>
          <div className="skill">
            <img
              className="skill-img"
              src="../images/aftereffectlogo.png"
              alt=""
            />
            <div className="skill-header">
              <h1 className="skill-title">communication</h1>
              <p className="skill-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                unde hic quaerat perspiciatis facere provident temporibus porro
                repudiandae, soluta neque laboriosam commodi veniam debitis
                possimus consequuntur itaque asperiores quisquam sequi?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="softwares-container">
        <div className="softwares-content">
          <h1>
            <span className="bold">softwares</span>
            <span className="light"> i use</span>
          </h1>
          <hr />
        </div>
        <div className="softwares-logo">
          <div className="softwares">
            <img src="../images/aftereffectlogo.png" alt="" />
            <h1>after effect</h1>
          </div>
          <div className="softwares">
            <img src="../images/logopp.png" alt="" />
            <h1>premiere pro</h1>
          </div>
          <div className="softwares">
            <img src="../images/blenderlogo.png" alt="" />
            <h1>blender</h1>
          </div>
        </div>
      </div>

      <div className="main-footer" style={{backgroundColor: "rgb(15, 12, 29)"}}>
        <h1>GET IN <span className="bold" style={{color:"rgb(234, 215, 254)"}}>TOUCH.</span></h1>
        <p className="main-footer-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          distinctio amet voluptatem magnam? Obcaecati harum repellat laboriosam
          impedit? Vero porro ea dolore incidunt vel maxime quibusdam sequi sed.
          Illo, nisi?
        </p>
        <ul>
          <li>
            <a href="">emaill</a>
          </li>
          <li>
            <a href="">linkedin</a>
          </li>
        </ul>
        <div className="footer-line"></div>
        <p className="main-footer-close">berkay erdemir 2023</p>
      </div>
    </>
  )
}
const router = createBrowserRouter([
  {
    path:'/',
    element: <Header/>,
    children:[
      {
        path:'',
        element: <About/>
      }
      ,
      {
        path:"Home",
        element: <About/>
      }
      ,
      {
        path:"about me",
        element:<Portfolio/>
      }
    ]
  }
]);


export default function App() {

  return <RouterProvider router={router} />;
}
