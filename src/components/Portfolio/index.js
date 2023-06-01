import React from "react";
import "./PortfolioStyles.scss";
import FeaturedProject from "./FeaturedProject";
import Projects from "./Projects";
import { featured1, projects } from "./data";

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <FeaturedProject {...featured1} />
      <Projects projects={projects}/>
    </section>
  );
};

export default Portfolio;
