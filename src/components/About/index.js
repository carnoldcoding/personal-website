import React from "react";
import "./AboutStyles.scss";
import Trait from "./Trait";
import {trait1, trait2, trait3} from "./data";

const About = () => {
  return (
    <section id="About">
      <Trait {...trait1} reverse={true}/>
      <Trait {...trait2} reverse={false}/>
      <Trait {...trait3} reverse={true}/>
    </section>
  );
};

export default About;
