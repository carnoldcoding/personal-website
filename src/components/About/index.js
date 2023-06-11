import React from "react";
import "./AboutStyles.scss";
import Trait from "./Trait";
import { trait1, trait2, trait3} from "./data";
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
  const traitOne = useRef();
  const traitTwo = useRef();
  const traitThree = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          pin: true,
          start: "top top",
          end: "+=3000",
          scrub: 1
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
        })
        .to("body", { duration: .75})
        .from(traitOne.current, {
          x: "-100vw",
        })

        .to("body", { duration: .75})
        .from(traitTwo.current, {
          x: "100vw",
        })

        .to("body", { duration: .75})
        .from(traitThree.current, {
          y: "100vh",
        })
        .to("body", { duration: .75});
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
          <ion-icon name="logo-javascript"></ion-icon>
          <ion-icon name="logo-html5"></ion-icon>
          <ion-icon name="logo-css3"></ion-icon>
          <ion-icon name="logo-sass"></ion-icon>
          <ion-icon name="logo-react"></ion-icon>
          <ion-icon name="logo-nodejs"></ion-icon>
        </aside>
      </article>
      <div className="traits-container">
        <Trait innerRef={traitOne} {...trait1} reverse={true} />
        <Trait innerRef={traitTwo} {...trait2} reverse={false} />
        <Trait innerRef={traitThree} {...trait3} reverse={true} />
      </div>
    </section>
  );
};

export default About;
