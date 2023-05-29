import React from "react";
import "./TraitStyles.scss";

const Trait = ({ image, title, text, reverse}) => {
    console.log(reverse);
  return (
    <article className={reverse ? "trait alt" : "trait"}>
      <div>{image}</div>
      <aside>
        <h1>{title}</h1>
        <p>{text}</p>
      </aside>
    </article>
  );
};

export default Trait;
