import React from "react";
import "./ProjectStyles.scss";

const Project = ({ project, description }) => {
  return (
    <article class="project">
      <header>
      <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="folder-outline"></ion-icon>
      </header>
      <div className="content">
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Project;
