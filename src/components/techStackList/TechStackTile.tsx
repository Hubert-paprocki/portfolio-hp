import React, { useEffect, useState } from "react";
import classes from "./TechStack.module.scss";

interface TechStackTileProps {
  icon: React.ComponentType;
  name: string;
  animation: boolean;
  delay: number;
  small?: boolean; // Add a question mark to indicate that 'small' prop is optional
}

function TechStackTile(props: TechStackTileProps): JSX.Element {
  const { icon: Icon, name, animation, delay, small } = props;
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
        <div className={`${small ? classes.iconSmall : classes.icon}`}>
          <Icon />
        </div>
        <figcaption className={`${small ? classes.textSmall : classes.text}`}>
          <h2>{name}</h2>
        </figcaption>
      </figure>
    </li>
  );
}

export default TechStackTile;
