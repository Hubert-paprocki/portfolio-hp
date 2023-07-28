import React, { useEffect, useState } from "react";
import classes from "./TechStack.module.scss";

interface TechStackTileProps {
  icon: React.ComponentType;
  name: string;
  animation: boolean;
  delay: number;
}

function TechStackTile(props: TechStackTileProps): JSX.Element {
  const { icon: Icon, name, animation, delay } = props;
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
    <li>
      <figure
        className={`${classes.tile} ${
          isVisible && classes.animationSlideFromBottom
        }`}
      >
        <div className={classes.icon}>
          <Icon />
        </div>
        <figcaption className={classes.text}>
          <p>{name}</p>
        </figcaption>
      </figure>
    </li>
  );
}

export default TechStackTile;
