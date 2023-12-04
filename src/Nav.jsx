import navCSS from "./CSS/nav.module.css";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";

export function Nav({ navs }) {
  const baseNav = ["aa", "aa me", "vv"];
  let currentNav = [];
  if (navs) {
    currentNav = navs;
  } else {
    currentNav = baseNav;
  }
  const { theme, readableColor } = useColorTheme();


  let navArray = [];
  currentNav.forEach((item) => {
    navArray.push(
      <li key={item} onClick={() => null}>
        <a style={{"color":readableColor}} className={navCSS.link} href="">
          {item}
        </a>
      </li>
    );
  });
  return (
    <>
      <ul>{navArray}</ul>
    </>
  );
}
