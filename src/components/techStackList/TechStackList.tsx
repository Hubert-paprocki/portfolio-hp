import React, { useContext } from "react";
import TechStackTile from "./TechStackTile";
import classes from "./TechStack.module.scss";
import { TechStack } from "@/pages/api/projectList";
import LanguageContext from "@/context/LangContext";

interface TechStackListProps {
  animation: boolean;
  techStack: TechStack[];
  small?: boolean;
  setTechDescText?: (desc: string) => void;
}

export const translateList = function (
  key: string | undefined,
  translation: any
) {
  if (key) return translation[key];
};

function TechStackList(props: TechStackListProps) {
  const { selectedLanguage } = useContext(LanguageContext);
  const techStackListDescLanguage = selectedLanguage?.techStackDesc;
  const { animation, techStack, small, setTechDescText = () => {} } = props;

  return (
    <ul className={`${small ? classes.listSmall : classes.list}`}>
      {techStack.map((item, index) => {
        const { icon, name } = item;
        const translatedDesc = translateList(name, techStackListDescLanguage);
        const delay = animation ? index * 100 : 0;
        return (
          <TechStackTile
            key={name}
            icon={icon}
            name={name}
            animation={animation}
            delay={delay}
            small={small}
            desc={translatedDesc}
            setTechDescText={(desc: string) => setTechDescText(desc ?? "")}
          />
        );
      })}
    </ul>
  );
}

export default TechStackList;
