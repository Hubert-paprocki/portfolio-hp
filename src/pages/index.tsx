import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import classes from "@/styles/Home.module.scss";
import TechStackList from "@/components/techStackList/TechStackList";
import { techStackList } from "@/pages/api/projectList";
import LanguageContext from "@/context/LangContext";

function HomePage() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [isAnimated, setIsAnimated] = useState(false);
  const [techDescText, setTechDescText] = useState("");
  const homePageLanguage = selectedLanguage.homePage;

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio - Hubert Paprocki</title>
      </Head>
      <main className={classes.main}>
        <div className={classes.mainWrapper}>
          <section
            className={`${classes.left} ${
              isAnimated && classes.animationSlideFromLeft
            }`}
          >
            <h1 className={classes.heading}>
              <em>
                {homePageLanguage.title[0]}{" "}
                <span className={classes.headingSpan}>
                  Hubert<span className={classes.headingSpanAfter}>Hubert</span>
                </span>
                {homePageLanguage.title[1]}
              </em>
            </h1>
          </section>
          <div className={classes.imgWrapper}>
            <Image
              src="/images/me.jpg"
              fill
              alt="me, the dev"
              className={`${classes.img} ${
                isAnimated && classes.animationSlideFromLeft
              }`}
            />
          </div>
        </div>
        <section>
          <TechStackList
            animation={isAnimated}
            techStack={techStackList}
            setTechDescText={setTechDescText}
            small
          />
          {techDescText && (
            <p className={classes.techStackDesc}>{techDescText}</p>
          )}
        </section>
      </main>
    </>
  );
}
export default HomePage;
