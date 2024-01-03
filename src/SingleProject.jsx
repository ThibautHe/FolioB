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
      description: "this is a placeholder description",
    },
    {
      id: 3,
      name: "Fiverr",
      categorie: "logo animation",
      img: "../images/berkayshowreelimg.png",
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
    <div className="content-container" style={{ backgroundColor: theme }}>
      <div className="project-title">
        <h1>{project.name}</h1>
        <h2>{project.categorie}</h2>
      </div>
      <div className="project-images">
        <img src={mainImg} alt="" />
        <div className="other-images">
          {secondaryImg.map((img) => (
            <img
              onClick={() => {
                handleImgClicked(img);
              }}
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>
      <p>{project.description}</p>
      <Footer />
    </div>
  );
}
