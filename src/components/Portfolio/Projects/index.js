import React from "react";
import { useState } from "react";
import "./ProjectsStyles.scss";

const Projects = ({ projects }) => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={toggle} data-text={visible ? "less work" : "more work"}>
        {visible ? "less work" : "more work"}
      </button>
      <article
        className={
          visible ? "projects-container visible" : "projects-container"
        }
      >
        {projects.map((project) => {
          return (
            <article className="project">
              <div className="content">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
              <aside>
                {project.live && (
                  <a href={project.live} rel="noreferrer" target="_blank">
                    <ion-icon name="play-outline"></ion-icon>
                  </a>
                )}
                {project.git && (
                  <a href={project.git} target="_blank" rel="noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                )}
              </aside>
            </article>
          );
        })}
      </article>
    </>
  );
};

export default Projects;
