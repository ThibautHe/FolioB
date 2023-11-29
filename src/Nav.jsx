import navCSS from "./CSS/nav.module.css";
export function Nav({ navs }) {
  const baseNav = ["aa", "aa me", "vv"];
  let currentNav = [];
  if (navs) {
    currentNav = navs;
  } else {
    currentNav = baseNav;
  }

  let navArray = [];
  currentNav.forEach((item) => {
    navArray.push(
      <li key={item} onClick={() => null}>
        <a className={navCSS.link} href="">
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
