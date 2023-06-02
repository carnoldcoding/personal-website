import React from "react";
import "./PortfolioStyles.scss";
import FeaturedProject from "./FeaturedProject";
import Projects from "./Projects";
import { featured1, projects } from "./data";

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h1 className="title">Portfolio</h1>
      <FeaturedProject {...featured1} />
      <Projects projects={projects}/>
    </section>
  );
};

export default Portfolio;
