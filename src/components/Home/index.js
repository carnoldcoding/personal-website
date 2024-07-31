import React, { useRef, useLayoutEffect, useEffect } from "react";
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
            height: "100%",
            opacity: 1,
        }, "-=.2");

    }, scope);
    return () => ctx.revert();
  }, []);

  const handleClick = function(e){
    document.getElementById('About').scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  return (
    <section id="Home" ref={scope}>
      <article>
        <img src={ProfilePic} ref={pfp} />
        <p ref={text}>
          Cam.<span>Code</span>
        </p>
      </article>
      <a ref={button}>
        <button onClick={handleClick} data-text="start">start</button>
      </a>
    </section>
  );
};

export default Home;
