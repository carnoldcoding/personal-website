 import React from "react";
import "./FeaturedProjectStyles.scss";

const FeaturedProject = ({ header, site, image, description, infoRef, imgRef, link, reverse}) => {
  return (
    <article className={reverse ? "featured reverse" : "featured"}>
      <div className="content" ref={infoRef} data-bg={image}>
        <header className={reverse && "reverse"}>
          <h3>{header}</h3>
          <h1>{site}</h1>
        </header>
        <p>{description}</p>
      </div>
      <a href={link} target="_blank">
        <div className={reverse ? "image reverse" : "image"} ref={imgRef}>
          <img src={image} alt={site} />
        </div>
      </a>
    </article>
  );
};

export default FeaturedProject;
