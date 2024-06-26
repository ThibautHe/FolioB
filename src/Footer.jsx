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
          If you want to get in touch, don't hesitate to send an email or contact
          me on linkedin
        </p>
        <ul>
          <li>
            <a href="mailto:thibaut.hellinckx@hotmail.com">email</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thibauthellinckx-673b081a3/"
              target="_blank"
            >
              linkedin
            </a>
          </li>
        </ul>
        <div className="footer-line"></div>
        <p className="main-footer-close">Thibaut Hellinckx 2023</p>
      </div>
    </>
  );
}
