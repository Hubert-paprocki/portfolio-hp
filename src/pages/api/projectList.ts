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
}

export interface Project {
  id:string
  img: string;
  title: string;
  techstack: TechStack[];
  link: string;
  outLink: string;
}

export const projectsArr: Project[] = [
  {
    id:"simpleWeather",
    img: "simpleWeather1.png",
    title: "Simple Weather",
    techstack: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJest, name: "Jest" },
    ],
    link: "simple-weather",
    outLink:"https://simple-weather-hp.web.app/"
  },
  {
    id:"toDo",
    img: "todo1.png",
    title: "What's the plan?",
    techstack: [
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },      {icon:SiFirebase,name:"Firebase"}
    ],
    link: "whats-the-plan",
    outLink:"https://whatstheplan-hp.web.app/"
  },
  {
    id:"ambient",
    img: "ambient1.png",
    title: "Ambient",
    techstack: [
      { icon: SiRedux, name: "Redux" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiSass, name: "SCSS" },
    ],
    link: "ambient",
    outLink:""
  },
  {
    id:"cookieClicker",
    img: "cookieClicker1.png",
    title: "Cookie Clicker",
    techstack: [
      { icon: SiRedux, name: "Redux" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiJest, name: "Jest" },
      {icon:SiFirebase,name:"Firebase"}
    ],
    link: "cookie-clicker",
    outLink:"https://cookieclicker-hp.web.app/"
  },
  {
    id:"pswrdgn",
    img: "pswrdgn1.png",
    title: "P4$5W0rD!",
    techstack: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
    link: "pswrdgn",
    outLink:""
  },
];


export const techStackList: TechStack[] = [
  {
    icon: SiJavascript,
    name: "JavaScript"
  },
  {
    icon: SiTypescript,
    name: "TypeScript"
  },
  {
    icon: SiReact,
    name: "React"
  },
  {
    icon: SiNextdotjs,
    name: "Next.js"
  },
  {
    icon: SiRedux,
    name: "Redux",
  },
  {
    icon: SiSass,
    name: "Sass",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
  },
  {
    icon: SiCss3,
    name: "CSS3",
  },
  {
    icon: SiHtml5,
    name: "HTML5",
  },
  {
    icon: SiJest,
    name: "Jest",
  },
  {
    icon: SiGithub,
    name: "GitHub",
  },
  {
    icon: SiFirebase,
    name: "Firebase",
  },
];