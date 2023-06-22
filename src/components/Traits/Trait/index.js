import React, { useRef, useState, useLayoutEffect } from "react";
import "./TraitStyles.scss";
import gsap from "gsap";
import { Power3 } from "gsap/gsap-core";

const Trait = ({ title, text, innerRef }) => {
  const tl = useRef();
  const hover = useRef();
  const scope = useRef();
  const header = useRef();
  const wording = useRef();
  const container = useRef();

  const handleEnter = () => {
    tl.current.play();
  };
  const handleLeave = () => {
    tl.current.reverse();
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        ease: Power3,
        paused: true,
      });
      tl.current
        .to(header.current, {
          scale: 0,
        })
        .to(container.current, {
          height: "400px",
          width: "clamp(300px, 70vw, 600px)",
          borderRadius: "10px",
          background: "#16bfe4",
          boxShadow: "0 0 50px rgba(22, 191, 229, .5)",
        })
        .to(wording.current, {
          opacity: 1,
          x: 0,
        })
        .to(
          "span",
          {
            opacity: 1,
          },
          "-=.5"
        );
    }, scope);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <span ref={scope}>
      <article className="trait" ref={innerRef}>
        <div
          ref={container}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <span className="inset"></span>
          <span className="shine"></span>
          <h1 ref={header}>{title}</h1>
          <p ref={wording}>{text}</p>
        </div>
      </article>
    </span>
  );
};

export default Trait;
