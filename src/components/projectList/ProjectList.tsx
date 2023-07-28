import React from "react";
import ProjectTile from "./ProjectTile";
import { projectsArr } from "@/pages/api/projectList";
import classes from "./Projects.module.scss";

function ProjectList() {
  return (
    <ul className={classes.list}>
      {projectsArr.map((item) => {
        const { img, descShort, descLong, link, techstack, title } = item;
        return (
          <ProjectTile
            title={title}
            img={img}
            descShort={descShort}
            descLong={descLong}
            techstack={techstack}
            link={link}
            key={title}
          />
        );
      })}
    </ul>
  );
}

export default ProjectList;
