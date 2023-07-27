import React from "react";
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
import TechStackTile from "./TechStackTile";
import classes from "./TechStack.module.scss";

interface TechStackListProps {
  animation: boolean;
}

interface TechStack {
  icon: React.ComponentType;
  text: string;
}

const techStackList: TechStack[] = [
  { icon: SiJavascript, text: "JavaScript" },
  { icon: SiTypescript, text: "TypeScript" },
  { icon: SiReact, text: "React" },
  { icon: SiNextdotjs, text: "Next.js" },
  { icon: SiRedux, text: "Redux" },
  { icon: SiSass, text: "Sass" },
  { icon: SiTailwindcss, text: "Tailwind" },
  { icon: SiCss3, text: "CSS3" },
  { icon: SiHtml5, text: "HTML5" },
  { icon: SiJest, text: "Jest" },
  { icon: SiGithub, text: "GitHub" },
];

function TechStackList(props: TechStackListProps) {
  const { animation } = props;
  return (
    <ul className={classes.list}>
      {techStackList.map((item, index) => {
        const { icon, text } = item;
        const delay = animation ? index * 100 : 0;
        return (
          <TechStackTile
            key={text}
            icon={icon}
            text={text}
            animation={animation}
            delay={delay}
          />
        );
      })}
    </ul>
  );
}

export default TechStackList;
