import { useColorTheme } from "./Hooks/useColorTheme"

export function FooterMain()
{
    const {color1,color2} = useColorTheme();
    
    return(
    <>
        <div className="main-footer" style={{backgroundColor: `rgb(${color1.join(",")})`}}>
            <h1>GET IN <span className="bold" style={{color:`rgb(${color2.join(",")})`}}>TOUCH.</span></h1>
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
      </>)
}