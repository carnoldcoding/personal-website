 import React from "react";
import "./FeaturedProjectStyles.scss";

const FeaturedProject = ({ header, site, image, description, infoRef, imgRef}) => {
  return (
    <article className="featured">
      <div className="content" ref={infoRef} data-bg={image}>
        <header>
          <h3>{header}</h3>
          <h1>{site}</h1>
        </header>
        <p>{description}</p>
      </div>
      <a href="https://www.speedydoodle.com/" target="_blank">
        <div className="image" ref={imgRef}>
          <img src={image} alt={site} />
        </div>
      </a>
    </article>
  );
};

export default FeaturedProject;
