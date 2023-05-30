import React from "react";
import "./TraitStyles.scss";

const Trait = ({ image, title, text, reverse }) => {
  return (
    <div className="trait-container">
      <article className={reverse ? "trait alt" : "trait"}>
        {image}
        <aside>
          <h1>{title}</h1>
          <p>{text}</p>
        </aside>
      </article>
    </div>
  );
};

export default Trait;
