 import React from "react";
import "./FeaturedProjectStyles.scss";

const FeaturedProject = ({ header, site, image, description }) => {
  return (
    <article className="featured">
      <div className="content" data-bg={image}>
        <header>
          <h3>{header}</h3>
          <h1>{site}</h1>
        </header>
        <p>{description}</p>
      </div>
      <div className="image">
        <img src={image} alt={site} />
      </div>
    </article>
  );
};

export default FeaturedProject;
