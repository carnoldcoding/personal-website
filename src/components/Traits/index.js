import React from "react";
import { trait1, trait2, trait3 } from "./data.js";
import Trait from "./Trait";
import "./styles.scss";

const Traits = () => {
  return (
    <section id="Traits">
      <Trait {...trait1} />
      <Trait {...trait2} />
      <Trait {...trait3} />
    </section>
  );
};

export default Traits;
