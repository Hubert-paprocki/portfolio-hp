import React, { useContext } from "react";
import ProjectTile from "./ProjectTile";
import { projectsArr } from "@/pages/api/projectList";
import classes from "./Projects.module.scss";
import LanguageContext from "@/context/LangContext";
import { translateList } from "../techStackList/TechStackList";
function ProjectList() {
  const { selectedLanguage } = useContext(LanguageContext);
  const translatedProjectList = selectedLanguage.projectPage.project;

  return (
    <ul className={classes.list}>
      {projectsArr.map((item) => {
        const { id, img, link, techstack, title } = item;
        const translatedProject = translateList(id, translatedProjectList);

        return (
          <ProjectTile
            id={id}
            title={title}
            img={img}
            descShort={translatedProject.descShort}
            descLong={translatedProject.descLong}
            techstack={techstack}
            link={link}
            key={id}
          />
        );
      })}
    </ul>
  );
}

export default ProjectList;
