import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import classes from "@/styles/Home.module.scss";
import TechStackList from "@/components/techStackList/TechStackList";
import { techStackList } from "@/pages/api/projectList";
function HomePage() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [techDescText, setTechDescText] = useState("");
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
                Hi, welcome! My name is{" "}
                <span className={classes.headingSpan}>
                  Hubert<span className={classes.headingSpanAfter}>Hubert</span>
                </span>
                , and I might be what you are looking for.
              </em>
            </h1>
          </section>
          <div className={classes.imgWrapper}>
            <Image
              src="/images/me.jpg"
              width={100}
              height={100}
              layout="responsive"
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
