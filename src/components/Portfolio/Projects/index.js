import React from "react";
import { useState } from "react";
import "./ProjectsStyles.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

const Projects = ({ projects }) => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
  const scope = useRef();
  const tl = useRef();
  const button = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top center",
        },
      });
    }, scope);
    return () => ctx.revert();
  }, []);
  return (
    <div className="more-work" ref={scope}>
      <button
        onClick={toggle}
        ref={button}
        data-text={visible ? "less work" : "more work"}
      >
        {visible ? "less work" : "more work"}
      </button>
      {visible && (
        <article className="projects-container">
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
      )}
    </div>
  );
};

export default Projects;
