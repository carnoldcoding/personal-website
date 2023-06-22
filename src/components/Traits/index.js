import React from "react";
import { trait1, trait2, trait3 } from "./data.js";
import Trait from "./Trait";
import "./styles.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Traits = () => {
  const scope = useRef();
  const tl = useRef();
  const traits = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top center",
        },
      });
        traits.current.forEach(trait=>{
            tl.current.from(trait,{
                x: -100,
                opacity: 0,
                duration: 1,
                rotate: 270
            }, "-=.5")
        })
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="Traits" ref={scope}>
      <Trait {...trait1} innerRef={(el)=>{traits.current.push(el)}}/>
      <Trait {...trait2} innerRef={(el)=>{traits.current.push(el)}}/>
      <Trait {...trait3} innerRef={(el)=>{traits.current.push(el)}}/>
    </section>
  );
};

export default Traits;
