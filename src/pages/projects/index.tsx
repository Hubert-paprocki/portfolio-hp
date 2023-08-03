import React, { useContext } from "react";
import ProjectList from "@/components/projectList/ProjectList";
import classes from "./ProjectsPage.module.scss";
import Head from "next/head";
import LanguageContext from "@/context/LangContext";

function ProjectsPage() {
  const language = useContext(LanguageContext);
  const projectsPageLanguage = language.selectedLanguage.projectPage;
  return (
    <>
      <Head>
        <title>{projectsPageLanguage.title}</title>
      </Head>
      <main className={classes.main}>
        <h1>{projectsPageLanguage.title}</h1>
        <ProjectList />
      </main>
    </>
  );
}

export default ProjectsPage;
