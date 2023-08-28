import React, { useContext } from "react";
import { Project } from "@/pages/api/projectList";
import classes from "./Projects.module.scss";
import Link from "next/link";
import Image from "next/image";
import LanguageContext from "@/context/LangContext";

interface ProjectTileProps extends Project {
  descShort: string;
  descLong: string;
  outLink: string;
}

function ProjectTile(props: ProjectTileProps): JSX.Element {
  const { selectedLanguage } = useContext(LanguageContext);
  const projectTileLanguage = selectedLanguage.projectPage.project.learnMore;
  const { img, descShort, link, title } = props;

  return (
    <li className={classes.tile}>
      <article>
        <figure className={classes.container}>
          <div className={classes.imgWrap}>
            <Image src={`/images/${img}`} fill alt={`${title} app thumbnail`} />
          </div>
          <figcaption className={classes.textWrapper}>
            <h2>{title}</h2>
            <p>
              {descShort}{" "}
              <Link href={`projects/${link}`}> {projectTileLanguage}</Link>
            </p>
          </figcaption>
        </figure>
      </article>
    </li>
  );
}

export default ProjectTile;
