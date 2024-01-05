import { useParams } from "react-router-dom";
import "./CSS/PortfolioPages/singlepage.css";
import { useState } from "react";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { Footer } from "./Footer.jsx";

export function SingleProject() {
  const { theme, readableColor, color1, color2 } = useColorTheme();

  const Projects = [
    {
      id: 1,
      name: "vfx overload",
      categorie: "blender vfx",
      img: "../images/berkayshowreelimg.png",
      showcaseImg: [
        "https://picsum.photos/id/237/410/230",
        "https://picsum.photos/id/54/410/230",
        "https://picsum.photos/id/222/410/230",
      ],
      description: "this is a placeholder description",
    },
    {
      id: 2,
      name: "anime montage",
      categorie: "montage",
      img: "../images/berkayshowreelimg.png",
      showcaseImg: [
        "https://picsum.photos/id/237/410/230",
        "https://picsum.photos/id/54/410/230",
        "https://picsum.photos/id/222/410/230",
      ],
      description: "this is a placeholder description",
    },
    {
      id: 3,
      name: "Fiverr",
      categorie: "logo animation",
      img: "../images/berkayshowreelimg.png",
      showcaseImg: [
        "https://picsum.photos/id/237/410/230",
        "https://picsum.photos/id/54/410/230",
        "https://picsum.photos/id/222/410/230",
      ],
      description: "this is a placeholder description",
    },
  ];
  const { id } = useParams();
  const project = Projects.find((project) => project.id === parseInt(id));
  const [mainImg, setMainImg] = useState(project.img);
  const [secondaryImg, setSecondaryImg] = useState(project.showcaseImg);

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
  return (
    <>
      <div className="content-container" style={{ backgroundColor: theme }}>
        <div className="project-title">
          <h1>{project.name}</h1>
          <h2>{project.categorie}</h2>
        </div>
        <div className="project-images">
          <img src={mainImg} alt="" />
          <div className="other-images">
            {secondaryImg.map((img) => (
              <img key={img}
                onClick={() => {
                  handleImgClicked(img);
                }}
                src={img}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      <section
        className="project-about-container"
        style={{ backgroundColor: "black" }}
      >
        <div className="porject-div project-about-title">
          <h1 style={{ color: `rgb(${color2})` }}>About the project</h1>
        </div>
        <div className="porject-div project-description">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel magni
            dicta, adipisci numquam, doloribus quidem modi porro molestias
            quaerat aspernatur nulla quis architecto reprehenderit sunt
            necessitatibus natus minus atque corrupti?
          </p>
        </div>
      </section>

      <section
        className="project-extra-container"
        style={{ backgroundColor: theme }}
      >
        <div className="proj-text">
          <h1>and a cool magazine</h1>
        </div>
        <div className="project-extra-content">
          <img src="https://picsum.photos/300/400" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis voluptas illo perferendis quaerat, doloribus nulla
            animi quia cupiditate suscipit assumenda voluptate? Vero iusto natus
            culpa provident voluptatem vel maiores earum.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
