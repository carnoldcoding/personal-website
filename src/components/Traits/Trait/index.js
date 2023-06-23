import React, { useRef, useState, useLayoutEffect } from "react";
import "./TraitStyles.scss";
import gsap from "gsap";
import { Power3 } from "gsap/gsap-core";

const Trait = ({ title, text, innerRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef();
  const scope = useRef();
  const header = useRef();
  const wording = useRef();
  const container = useRef();
  const hover = useRef();
  const toggle = () => {
    setIsOpen(!isOpen);
    isOpen ? tl.current.reverse() : tl.current.play();
  };

  const handleEnter = () => {
    hover.current.play();
  };
  const handleLeave = () => {
    hover.current.reverse();
  };
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      hover.current = gsap.timeline({
        paused: true,
      });
      hover.current.to("ion-icon", {
        rotate: "-90deg",
          color: "#fff"
      }).to(header.current, {
      }, "<");
      tl.current = gsap.timeline({
        ease: Power3,
        paused: true,
      });
      tl.current
        .to("ion-icon", {
          bottom: "120%",
        })
        .to(
          header.current,
          {
            top: "-100%",
          },
          "-=.45"
        )
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
          onClick={toggle}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <span className="inset"></span>
          <span className="shine"></span>
          <h1 ref={header}>{title}</h1>
          <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          <p ref={wording}>{text}</p>
        </div>
      </article>
    </span>
  );
};

export default Trait;
