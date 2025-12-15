import React from "react";
import "./PortfolioStyles.scss";
import FeaturedProject from "./FeaturedProject";
import Projects from "./Projects";
import { featured1, featured2, featured3, featured4, featured5 } from "./data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

const Portfolio = () => {
  const scope = useRef();
  const tl = useRef();
  const title = useRef();
  const img = useRef();
  const info = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top center",
        },
      });
      tl.current
        .from(title.current, {
          y: -100,
          opacity: 0,
        })
        .from(info.current,{
            opacity: 0,
            x: -100
        }, "-=.2").from(img.current,{
            opacity: 0,
            x: 100
        });
    }, scope);
    return () => ctx.revert();
  }, []);
  return (
    <section id="Portfolio" ref={scope}>
      <h1 className="title" ref={title}>
        Portfolio
      </h1>
      <FeaturedProject infoRef={info} imgRef={img} {...featured5} />
      <FeaturedProject infoRef={info} imgRef={img} {...featured1} />
      <FeaturedProject infoRef={info} imgRef={img} {...featured2} />
      <FeaturedProject infoRef={info} imgRef={img} {...featured3} />
      <FeaturedProject infoRef={info} imgRef={img} {...featured4} />

      {/* <Projects projects={projects} /> */}
    </section>
  );
};

export default Portfolio;
