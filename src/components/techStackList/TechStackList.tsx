import React from "react";
import TechStackTile from "./TechStackTile";
import classes from "./TechStack.module.scss";
import { TechStack } from "@/pages/api/projectList";

interface TechStackListProps {
  animation: boolean;
  techStack: TechStack[];
}

function TechStackList(props: TechStackListProps) {
  const { animation, techStack } = props;
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
          />
        );
      })}
    </ul>
  );
}

export default TechStackList;
