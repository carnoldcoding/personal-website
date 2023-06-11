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
  const stack = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          pin: true,
          start: "top top",
          end: "+=1000",
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
        })
        .from(stack.current, {
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
          I'm a software engineer specializing in <i>building</i> and{" "}
          <i>designing</i> unique digital experiences. I prioritize readability
          and simplicity in my work, to promote understanding and communication
          with my peers.
        </p>
        <aside ref={stack}>
          <div class="stack-item">
            <ion-icon name="logo-javascript"></ion-icon>
            <span>javascript</span>
          </div>
          <div class="stack-item">
            <ion-icon name="logo-html5"></ion-icon>
            <span>html</span>
          </div>
          <div class="stack-item">
            <ion-icon name="logo-css3"></ion-icon>
            <span>css3</span>
          </div>
          <div class="stack-item">
            <ion-icon name="logo-sass"></ion-icon>
            <span>sass</span>
          </div>
          <div class="stack-item">
            <ion-icon name="logo-react"></ion-icon>
            <span>react</span>
          </div>
          <div class="stack-item">
            <ion-icon name="logo-nodejs"></ion-icon>
            <span>node.JS</span>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default About;
