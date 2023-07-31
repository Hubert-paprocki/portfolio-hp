import React from "react";
import classes from "./Buttons.module.scss";

interface ButtonProps {
  readonly children?: React.ReactNode;
  readonly onClick?: () => void;
  readonly type?: "button" | "submit" | "reset" | undefined;
  readonly lang?: boolean;
}

function Button(props: ButtonProps) {
  const { children, onClick, type, lang } = props;
  let buttonClass;
  if (lang) buttonClass = classes.lang;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass ? buttonClass : ""}
    >
      {children}
    </button>
  );
}

export default Button;
