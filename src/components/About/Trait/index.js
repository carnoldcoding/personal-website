import React from "react";
import "./TraitStyles.scss";

const Trait = ({ image, title, text, reverse, innerRef }) => {
  return (
    <div className="trait-container" ref={innerRef}>
      <article className={reverse ? "trait alt" : "trait"}>
        {image}
        <aside>
          <h1><span>{title}</span></h1>
          <p>{text}</p>
        </aside>
      </article>
    </div>
  );
};

export default Trait;
