import Link from "next/link";
import classes from "./MainHeader.module.scss";
import LanguageSwitch from "../languageButton/LanguageButton";

interface HeaderLinks {
  link: string;
  name: string;
}

const headerLinks: HeaderLinks[] = [
  { link: "/", name: "Hubert Paprocki" },
  { link: "/about", name: "About Me" },
  { link: "/projects", name: "Projects" },
  { link: "/contact", name: "Contact" },
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
                  className={`${link === "/" ? classes.logo : classes.wrapper}`}
                >
                  <Link href={link}>{name}</Link>
                  <div className={classes.border}></div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={classes.langSwitch}>
        <LanguageSwitch />
      </div>
    </header>
  );
}

export default MainHeader;
