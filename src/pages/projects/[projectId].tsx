import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { projectsArr, Project } from "@/pages/api/projectList";
import Image from "next/image";
import TechStackList from "@/components/techStackList/TechStackList";
import LanguageContext from "@/context/LangContext";
import { translateList } from "@/components/techStackList/TechStackList";
import classes from "./Project.module.scss";

function ProjectDetails(): JSX.Element {
  const [isAnimated, setIsAnimated] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);
  const projectLanguage = selectedLanguage.projectPage.project;
  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const project: Project | undefined = projectsArr.find(
    (item) => item.link === projectId
  );

  if (!project) {
    return <div>Project not found.</div>;
  }

  const { title, img, techstack, id } = project;
  const translatedProject = translateList(id, projectLanguage);
  console.log(translatedProject);
  return (
    <main className={classes.main}>
      <article>
        <figure>
          <div className={classes.imgWrapper}>
            <Image src={`/images/${img}`} alt={title} fill />
          </div>
          <figcaption>
            <h1>{title}</h1>
            <p>{translatedProject.descLong}</p>{" "}
            <TechStackList animation={isAnimated} techStack={techstack} small />
          </figcaption>
        </figure>
      </article>
    </main>
  );
}

export default ProjectDetails;
