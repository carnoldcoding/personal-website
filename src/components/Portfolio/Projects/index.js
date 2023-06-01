import React from "react";
import "./ProjectsStyles.scss";

const Projects = ({ projects }) => {
  return (
    <article className="projects-container">
      {projects.map((project) => {
        return (
          <article className="project">
            <h1>{project.title}</h1>
            <div className="content">
              <p>{project.description}</p>
            </div>
            <ion-icon name="logo-github"></ion-icon>
          </article>
        );
      })}
    </article>
  );
};

export default Projects;
