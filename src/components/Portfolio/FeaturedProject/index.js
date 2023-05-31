import React from "react";
import "./FeaturedProjectStyles.scss";

const FeaturedProject = ({ header, site, image, stack, description }) => {
  return (
    <article className="featured">
      <aside>
        <header>
          <h3>{header}</h3>
          <h1>{site}</h1>
        </header>
        <p>{description}</p>
        <h3 className="stack">
          {stack.map((item) => {
            return <span>{item}</span>;
          })}
        </h3>
      </aside>
      <img src={image} alt="" />
    </article>
  );
};

export default FeaturedProject;
