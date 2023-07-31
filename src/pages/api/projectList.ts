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
      { icon: SiTailwindcss, name: "Tailwind" },      {icon:SiFirebase,name:"Firebase"}
    ],
    link: "whats-the-plan",
  },
  {
    img: "ambient.png",
    title: "Ambient",
    descShort:
      "Ambient is a website designed to help people focus while they study or work.",
    descLong: "					Ambient is a website designed to help people focus while they study orwork. The site features a variety of ambient sounds that users can listen to in the background while they complete their tasks.These sounds include nature sounds such as birds singing, thunder, and rain, as well as other calming sounds like white noise or city",
    techstack: [
      { icon: SiRedux, name: "Redux" },
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
  { icon: SiJavascript, name: "JavaScript", desc: "" },
  { icon: SiTypescript, name: "TypeScript", desc: "" },
  { icon: SiReact, name: "React", desc: "" },
  { icon: SiNextdotjs, name: "Next.js", desc: "" },
  {
    icon: SiRedux,
    name: "Redux",
    desc: "I have already completed several projects using Redux, and although I prefer pure React due to its reduced boilerplate, I understand the purpose and the benefits of using Redux",
  },
  { icon: SiSass, name: "Sass", desc: "Sass is simply amazing!" },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
    desc: "I have a love-hate relationship with Tailwind CSS. It can get messy, but its simplicity and quick application are definite pluses.",
  },
  {
    icon: SiCss3,
    name: "CSS3",
    desc: "I started my adventure with CSS back in high school when teachers asked us to write styles on paper, and I must admit that it's much better when you can see the changes on the monitor.",
  },
  {
    icon: SiHtml5,
    name: "HTML5",
    desc: "Similarly to CSS, my introduction to learning HTML took place during my time in high school.",
  },
  {
    icon: SiJest,
    name: "Jest",
    desc: "I am still a novice when it comes to using Jest for testing, but I know how to test basic components.",
  },
  {
    icon: SiGithub,
    name: "GitHub",
    desc: "Since 2022, I've been using GitHub and Git for various projects, including collaborative ones, making me proficient in navigating through branches",
  },
  {
    icon: SiFirebase,
    name: "firebase",
    desc: "",
  },
];