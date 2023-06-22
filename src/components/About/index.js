import React from "react";
import "./AboutStyles.scss";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const About = () => {
  const scope = useRef();
  const tl = useRef();
  const fills = useRef([]);
  const subtext = useRef();
  const text = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top center",
            end: "center center",
          scrub: 1,
        },
      });

      fills.current.forEach((fill) => {
        tl.current.to(
          fill,
          {
            width: "100%",
          },
          "<"
        );
      });
      tl.current
        .from(subtext.current, {
          x: 100,
          opacity: 0,
        })
        .from(text.current, {
          x: -100,
          opacity: 0,
        });
    }, scope);
    return () => ctx.revert();
  }, []);
  return (
    <section id="About" ref={scope}>
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
          As a software engineer specializing in <span>building</span> and{" "}
          <span>designing</span> unique digital experiences, I prioritize
          readability and simplicity in my work to promote understanding and
          communication with my peers.
        </p>
      </article>
    </section>
  );
};

export default About;
