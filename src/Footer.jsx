import { useColorTheme } from "./Hooks/useColorTheme";

export function Footer() {
  const { color1, color2 } = useColorTheme();

  return (
    <>
      <div className="main-footer">
        <h1>
          GET IN{" "}
          <span className="bold" style={{ color: `rgb(${color2.join(",")})` }}>
            TOUCH.
          </span>
        </h1>
        <p className="main-footer-description">
          If you want to get in touch, dont hesitate to send an emain or contact
          me on linkedin
        </p>
        <ul>
          <li>
            <a href="mailto:thibaut.hellinckx@hotmail.com">emaill</a>
          </li>
          <li>
            <a href="">linkedin</a>
          </li>
        </ul>
        <div className="footer-line"></div>
        <p className="main-footer-close">Thibaut Hellinckx 2023</p>
      </div>
    </>
  );
}
