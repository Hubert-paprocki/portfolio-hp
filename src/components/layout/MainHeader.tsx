import Link from "next/link";
import classes from "./MainHeader.module.scss";

interface HeaderLinks {
  link: string;
  name: string;
}

const headerLinks: HeaderLinks[] = [
  { link: "/", name: "Hubert Paprocki" },
  { link: "/about", name: "About Me" },
  { link: "/Projects", name: "Projects" },
  { link: "/Contact", name: "Contact" },
];

function MainHeader() {
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <ul className={classes.navigationlist}>
          {headerLinks.map((item) => {
            const { link, name } = item;
            return (
              <li key={link}>
                <div
                  className={`${classes.wrapper} ${
                    link === "/" ? classes.logo : ""
                  }`}
                >
                  <Link href={link}>{name}</Link>
                  <div className={classes.border}></div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
