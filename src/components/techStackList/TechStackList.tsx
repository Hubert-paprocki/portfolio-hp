import React from "react";
import TechStackTile from "./TechStackTile";
import classes from "./TechStack.module.scss";
import { TechStack } from "@/pages/api/projectList";

interface TechStackListProps {
  animation: boolean;
  techStack: TechStack[];
  small?: boolean;
  setTechDescText: (desc: string) => void;
}

function TechStackList(props: TechStackListProps) {
  const { animation, techStack, small, setTechDescText } = props;
  return (
    <ul className={classes.list}>
      {techStack.map((item, index) => {
        const { icon, name, desc } = item;
        const delay = animation ? index * 100 : 0;
        return (
          <TechStackTile
            key={name}
            icon={icon}
            name={name}
            animation={animation}
            delay={delay}
            small={small}
            desc={desc}
            setTechDescText={setTechDescText}
          />
        );
      })}
    </ul>
  );
}

export default TechStackList;
