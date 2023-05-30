import React from "react";
import "./AboutStyles.scss";
import Trait from "./Trait";
import Experience from "./Experience";
import { trait1, trait2, trait3, experience1 } from "./data";

const About = () => {
  return (
    <section id="About">
      <article className="intro">
        <div className="title">
          <h1 data-text="Cameron" style={{ "--clr": "#16BFE4" }}>
            Cameron
          </h1>
          <h1 data-text="Arnold" style={{ "--clr": "white" }}>
            Arnold
          </h1>
          <h3>I turn ideas into digital reality</h3>
        </div>
        <p>
          I'm a software engineer specializing in <i>building</i> and{" "}
          <i>designing</i> unique digital experiences. I prioritize readability
          and simplicity in my work, to promote understanding and communication
          with my peers.
        </p>
        <aside>
          <ion-icon name="logo-javascript"></ion-icon>
          <ion-icon name="logo-html5"></ion-icon>
          <ion-icon name="logo-css3"></ion-icon>
          <ion-icon name="logo-sass"></ion-icon>
          <ion-icon name="logo-react"></ion-icon>
          <ion-icon name="logo-nodejs"></ion-icon>
        </aside>
      </article>
      <Trait {...trait1} reverse={true} />
      <Trait {...trait2} reverse={false} />
      <Trait {...trait3} reverse={true} />
      <Experience {...experience1} />
    </section>
  );
};

export default About;
