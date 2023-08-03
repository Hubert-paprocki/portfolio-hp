import { useContext } from "react";
import Link from "next/link";
import classes from "./MainHeader.module.scss";
import LanguageSwitch from "../languageButton/LanguageButton";
import LanguageContext from "@/context/LangContext";
interface HeaderLinks {
  link: string;
  name: string;
}

function MainHeader() {
  const { selectedLanguage } = useContext(LanguageContext);

  const headerLinks: HeaderLinks[] = [
    { link: "/", name: "Hubert Paprocki" },
    { link: "/about", name: selectedLanguage.headerLinks[0] },
    { link: "/projects", name: selectedLanguage.headerLinks[1] },
    { link: "/contact", name: selectedLanguage.headerLinks[2] },
  ];

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
