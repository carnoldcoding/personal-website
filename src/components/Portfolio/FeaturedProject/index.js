 import React from "react";
import "./FeaturedProjectStyles.scss";

const FeaturedProject = ({ header, site, image, description, infoRef, imgRef, link, reverse, stack}) => {
  return (
    <article className={reverse ? "featured reverse" : "featured"}>
      <div className="content" ref={infoRef}>
        <div className="mobile-background" style={{backgroundImage: `url(${image})`}}></div>
        <header className={reverse && "reverse"}>
          <h3>{header}</h3>
          <h1>{site}</h1>
        </header>
        <p>{description}</p>
        <div className="stack">
          {stack?.map(item=>{
            return <h4>{item}</h4>
          })}
        </div>
        <a href={link} target="_blank">
          <div className="mobile-view-site">
            <p>view site</p>
            <ion-icon name="eye-outline"></ion-icon>
          </div>
        </a>
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
