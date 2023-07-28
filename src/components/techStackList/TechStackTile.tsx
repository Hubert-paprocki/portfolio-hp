import React, { useEffect, useState } from "react";
import classes from "./TechStack.module.scss";

interface TechStackTileProps {
  icon: React.ComponentType;
  name: string;
  animation: boolean;
  delay: number;
  small?: boolean;
  setTechDescText: (desc: string) => void;
  desc?: string;
}

function TechStackTile(props: TechStackTileProps): JSX.Element {
  const {
    icon: Icon,
    name,
    animation,
    delay,
    small,
    desc,
    setTechDescText,
  } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animation) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [animation, delay]);

  const handleMouseEnter = () => {
    if (desc) {
      setTechDescText(desc);
    }
  };

  const handleMouseLeave = () => {
    setTechDescText("");
  };
  if (desc) {
    return (
      <li>
        <figure
          className={`${classes.tile} ${
            isVisible && classes.animationSlideFromBottom
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
  } else {
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
}

export default TechStackTile;
