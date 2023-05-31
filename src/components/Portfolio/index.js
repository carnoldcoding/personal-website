import React from "react";
import "./PortfolioStyles.scss";
import FeaturedProject from "./FeaturedProject";
import Project from "./Project";
import { featured1, project1 } from "./data";

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <FeaturedProject {...featured1} />
      <article className="projects-container">
        <Project {...project1} />
        <Project {...project1} />
        <Project {...project1} />
        <Project {...project1} />
      </article>
    </section>
  );
};

export default Portfolio;
