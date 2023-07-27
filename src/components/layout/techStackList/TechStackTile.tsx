import React, { useEffect, useState } from "react";
import classes from "./TechStack.module.scss";

interface TechStackTileProps {
  icon: React.ComponentType;
  text: string;
  animation: boolean;
  delay: number;
}

function TechStackTile(props: TechStackTileProps): JSX.Element {
  const { icon: Icon, text, animation, delay } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animation) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [animation, delay]);

  return (
    <li
      className={`${classes.tile} ${
        isVisible && classes.animationSlideFromBottom
      }`}
    >
      <figure className={classes.icon}>
        <Icon />
      </figure>
      <figcaption className={classes.text}>{text}</figcaption>
    </li>
  );
}

export default TechStackTile;
