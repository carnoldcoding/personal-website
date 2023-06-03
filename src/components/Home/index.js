import React, { useRef, useLayoutEffect } from "react";
import ProfilePic from "../../images/PFP.png";
import "./HomeStyles.scss";
import gsap from "gsap";

const Home = () => {
  const pfp = useRef();
  const scope = useRef();
  const button = useRef();
  const text = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline();
      tl.current.to(pfp.current, {
        opacity: 1,
          duration: 1,
            delay: .8
      });

        tl.current.to(text.current, {
            opacity: 1,
            duration: .5,
        }, "-=.6");

        tl.current.to(button.current, {
            opacity: 1,
        }, "-=.2");

    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="Home" ref={scope}>
      <article>
        <img src={ProfilePic} ref={pfp} />
        <p ref={text}>
          Cam.<span>Code</span>
        </p>
      </article>
      <a href="#About" ref={button}>
        <button>explore</button>
      </a>
    </section>
  );
};

export default Home;
