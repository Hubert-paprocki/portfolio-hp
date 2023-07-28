import React from "react";
import ProjectTile from "./ProjectTile";
import classes from "./Projects.module.scss";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiSass,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiJest,
  SiRedux,
  SiGithub,
  SiNextdotjs,
} from "react-icons/si";

interface TechStack {
  icon: React.ComponentType;
  name: string;
}

export interface Project {
  img: string;
  title: string;
  descShort: string;
  descLong: string;
  techstack: TechStack[];
  link: string;
}

export const projectsArr: Project[] = [
  {
    img: "simpleWeather.png",
    title: "Simple Weather",
    descShort:
      "Simple Weather is a weather application that provides current weather information based on the user's location.",
    descLong:
      "Simple Weather is a weather application that provides current weather information based on the user's location. It utilizes the WeatherAPI.com API to retrieve weather data.",
    techstack: [
      { icon: SiJavascript, name: "Javascript" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJest, name: "Jest" },
    ],
    link: "simple-weather",
  },
  {
    img: "todo.png",
    title: "What's the plan?",
    descShort:
      "This is a simple ToDo application that allows you to manage your tasks and keep track of your progress.",
    descLong:
      "This is a simple ToDo application that allows you to manage your tasks and keep track of your progress. It provides a user-friendly interface, modern look and basic functionality for creating, editing, and completing tasks.",
    techstack: [
      { icon: SiJavascript, name: "Javascript" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
    link: "whats-the-plan",
  },
  {
    img: "ambient.png",
    title: "Ambient",
    descShort:
      "Ambient is a website designed to help people focus while they study or work.",
    descLong: "",
    techstack: [
      { icon: SiRedux, name: "Redux" },
      { icon: SiJavascript, name: "Javascript" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiSass, name: "SCSS" },
    ],
    link: "ambient",
  },
  {
    img: "cookieClicker.png",
    title: "Cookie Clicker",
    descShort:
      "Cookie Clicker is a fun and addictive idle game where you click on a giant cookie to earn cookies.",
    descLong:
      "Cookie Clicker is a fun and addictive idle game where you click on a giant cookie to earn cookies. The more cookies you earn, the more upgrades and power-ups you can unlock to automate the cookie production process and earn even more cookies.",
    techstack: [
      { icon: SiRedux, name: "Redux" },
      { icon: SiJavascript, name: "Javascript" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJest, name: "Jest" },
    ],
    link: "cookie-clicker",
  },
];

function ProjectList() {
  return (
    <ul className={classes.list}>
      {projectsArr.map((item) => {
        const { img, descShort, link, title } = item;
        return (
          <ProjectTile
            title={title}
            img={img}
            descShort={descShort}
            link={link}
            key={title}
          />
        );
      })}
    </ul>
  );
}

export default ProjectList;
