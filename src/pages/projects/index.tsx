import ProjectList from "@/components/projectList/ProjectList";
import React from "react";
import classes from "./ProjectPage.module.scss";
import Head from "next/head";

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>My Projects</title>
      </Head>
      <main className={classes.main}>
        <h1>My Projects</h1>
        <ProjectList />
      </main>
    </>
  );
}

export default ProjectsPage;
