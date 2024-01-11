import { useParams } from "react-router-dom";
import "./CSS/PortfolioPages/singlepage.css";
import { useState } from "react";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { Footer } from "./Footer.jsx";
import FontsCSS from "./CSS/fonts.module.css";
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
          <img src={mainImg} alt="" />
          <div className="other-images">
            {secondaryImg.map((img) => (
              <img
                key={img}
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
      <section className="project-about-container">
        <div className="project-div project-about-title">
          <h1 className={`${FontsCSS.regular}`}>
            About the <span className={FontsCSS.yellow}>project</span>
          </h1>
        </div>
        <div className="project-div project-description">
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
          <h1>
            and a cool <span className={FontsCSS.boldOblique}>magazine</span>
          </h1>
        </div>
        <div className="project-extra-content">
          <img src="https://picsum.photos/300/400" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis voluptas illo perferendis quaerat, doloribus nulla
            animi quia cupiditate suscipit assumenda voluptate? Vero iusto natus
            culpa provident voluptatem vel maiores earum.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
            ipsum alias pariatur praesentium odit debitis exercitationem ducimus
            voluptatem itaque quod nulla explicabo ea soluta a temporibus
            deleniti eaque, eos consequuntur.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia
            maxime minus fuga laboriosam cum quas et, facere quibusdam, saepe
            vel voluptatem magni, iste at molestiae temporibus iure ullam sequi.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo est
            magnam itaque temporibus hic dignissimos sequi iste labore optio
            nihil. Quibusdam laudantium dicta ut assumenda recusandae molestias
            ipsum? Cum, commodi.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
