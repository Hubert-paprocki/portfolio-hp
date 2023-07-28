import React from "react";
import { Project } from "@/pages/api/projectList";
import classes from "./Projects.module.scss";
import Link from "next/link";
import Image from "next/image";

function ProjectTile(props: Project): JSX.Element {
  const { img, descShort, link, title } = props;
  return (
    <li className={classes.tile}>
      <article>
        <figure>
          <Image
            src={`/images/${img}`}
            width={100}
            height={100}
            layout="responsive"
            alt=""
          />
          <figcaption>
            <h2>{title}</h2>
            <p>
              {descShort} <Link href={`projects/${link}`}>Learn more.</Link>
            </p>
          </figcaption>
        </figure>
      </article>
    </li>
  );
}

export default ProjectTile;
