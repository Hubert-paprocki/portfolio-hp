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
  SiFirebase
} from "react-icons/si";

export interface TechStack {
  icon: React.ComponentType;
  name: string;
  desc?:string
}

export interface Project {
  id:string
  img: string;
  title: string;
  descShort: string;
  descLong: string;
  techstack: TechStack[];
  link: string;
}

export const projectsArr: Project[] = [
  {
    id:"simpleWeather",
    img: "simpleWeather.png",
    title: "Simple Weather",
    descShort:
      "descShort",
    descLong:
      "descLong",
    techstack: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJest, name: "Jest" },
    ],
    link: "simple-weather",
  },
  {
    id:"toDo",
    img: "todo.png",
    title: "What's the plan?",
    descShort:
      "descShort",
    descLong:
      "descLong",
    techstack: [
      { icon: SiJavascript, name: "Javascript" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiTailwindcss, name: "Tailwind" },      {icon:SiFirebase,name:"Firebase"}
    ],
    link: "whats-the-plan",
  },
  {
    id:"ambient",
    img: "ambient.png",
    title: "Ambient",
    descShort:
      "descShort",
    descLong: "descLong",
    techstack: [
      { icon: SiRedux, name: "Redux" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiSass, name: "SCSS" },
    ],
    link: "ambient",
  },
  {
    id:"cookieClicker",
    img: "cookieClicker.png",
    title: "Cookie Clicker",
    descShort:
      "descShort",
    descLong:
      "descLong",
    techstack: [
      { icon: SiRedux, name: "Redux" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJest, name: "Jest" },
      {icon:SiFirebase,name:"Firebase"}
    ],
    link: "cookie-clicker",
  },
];


export const techStackList: TechStack[] = [
  { icon: SiJavascript, name: "JavaScript", desc: "js" },
  { icon: SiTypescript, name: "TypeScript", desc: "ts" },
  { icon: SiReact, name: "React", desc: "react" },
  { icon: SiNextdotjs, name: "Next.js", desc: "next" },
  {
    icon: SiRedux,
    name: "Redux",
    desc: "redux",
  },
  { icon: SiSass, name: "Sass", desc: "sass" },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
    desc: "tailwind",
  },
  {
    icon: SiCss3,
    name: "CSS3",
    desc: "css",
  },
  {
    icon: SiHtml5,
    name: "HTML5",
    desc: "html",
  },
  {
    icon: SiJest,
    name: "Jest",
    desc: "jest",
  },
  {
    icon: SiGithub,
    name: "GitHub",
    desc: "github",
  },
  {
    icon: SiFirebase,
    name: "Firebase",
    desc: "firebase",
  },
];