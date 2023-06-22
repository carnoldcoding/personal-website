import React from "react";
import "./IntroStyles.scss";

const Intro = (fills, subtext, text) => {
  
    return (
    <article className="intro">
      <div className="title">
        <div>
          <h1 className="outline" style={{ "--clr": "#16BFE4" }}>
            Cameron
          </h1>
          <h1
            ref={(e) => {
              fills.current.push(e);
            }}
            className="fill"
            style={{ "--clr": "#16BFE4" }}
          >
            Cameron
          </h1>
        </div>
        <div>
          <h1 className="outline" style={{ "--clr": "white" }}>
            Arnold
          </h1>
          <h1
            ref={(e) => {
              fills.current.push(e);
            }}
            className="fill"
            style={{ "--clr": "white" }}
          >
            Arnold
          </h1>
        </div>
        <h3 ref={subtext}>I turn ideas into digital reality</h3>
      </div>
      <p ref={text}>
        I'm a software engineer specializing in <i>building</i> and{" "}
        <i>designing</i> unique digital experiences. I prioritize readability
        and simplicity in my work, to promote understanding and communication
        with my peers.
      </p>
    </article>
  );
};

export default Intro
