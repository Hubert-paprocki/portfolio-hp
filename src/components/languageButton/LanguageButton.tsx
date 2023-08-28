import polandFlag from "../../../public/images/polandFlag.svg";
import usaFlag from "../../../public/images/usaFlag.svg";
import Button from "../ui/buttons/Buttons";
import React, { useContext } from "react";
import classes from "./LanguageButton.module.scss";

import Image from "next/image";
import LanguageContext from "@/context/LangContext";

function LanguageButton() {
  const { language, handleLanguageSwitch } = useContext(LanguageContext);
  console.log(language, `lng`);
  return (
    <div className={classes.buttonContainer}>
      <Button type="button" lang onClick={handleLanguageSwitch}>
        {language === "pl" ? (
          <Image src={usaFlag} alt="usa flag" className={classes.img} fill />
        ) : language === "en" ? (
          <Image
            src={polandFlag}
            alt="polish flag"
            aria-label="polish language"
            className={classes.img}
            fill
          />
        ) : null}
      </Button>
    </div>
  );
}

export default LanguageButton;
