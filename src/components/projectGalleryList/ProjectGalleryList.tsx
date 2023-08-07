import React from "react";
import ProjectGalleryTile from "./ProjectGalleryTile";

interface ProjectGalleryListProps {
  images: string[];
}

function ProjectGalleryList(props: ProjectGalleryListProps) {
  const { images } = props;
  return (
    <ul>
      {images.map((img) => {
        return <ProjectGalleryTile key={img} />;
      })}
    </ul>
  );
}

export default ProjectGalleryList;
