import { createContext, useState, useEffect } from "react";
import pl from "@/languages/pl.json";
import en from "@/languages/en.json";

const LanguageContext = createContext({
  language: "en",
  handleLanguageSwitch: () => {},
  selectedLanguage: en,
});

export function LanguageContextProvider(props: any) {
  const [language, setLanguage] = useState("en");

  const handleLanguageSwitch = () => {
    if (language === "pl") {
      setLanguage("en");
    } else {
      setLanguage("pl");
    }
    console.log(language);
  };

  useEffect(() => {
    const browserPolLangCheck = /pl/i.test(navigator.language);
    setLanguage(browserPolLangCheck ? "pl" : "en");
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        handleLanguageSwitch,
        selectedLanguage: language === "pl" ? pl : en,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
