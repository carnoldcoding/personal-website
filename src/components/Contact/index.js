import React from "react";
import "./ContactStyles.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Contact = () => {
  const scope = useRef();
  const tl = useRef();
  const mail = useRef();
  const letters = useRef([]);
  const text = "contact";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top center",
        },
      });
      letters.current.forEach((letter) => {
        tl.current.from(
          letter,
          {
            y: -50,
            opacity: 0
          },
          "-=.35"
        ).to(letter,{
            color: "white"
        },"-=.45")
      });

      tl.current.from(mail.current, {
        opacity: 0,
        y: -100,
      }, "-=.3");
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="Contact" ref={scope}>
      <h1>
        {text.split("").map((letter) => {
          return (
            <span
              ref={(el) => {
                letters.current.push(el);
              }}
            >
              {letter}
            </span>
          );
        })}
      </h1>
      <div class="contact" ref={mail}>
        <div class="envelope">
          <div class="top">
            <div class="outer">
              <div class="inner"></div>
            </div>
          </div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
          <div class="cover"></div>
          <div class="paper">
            <a class="mail" href="mailto:carnoldcoding@gmail.com">
              @carnoldcoding
            </a>

            <a class="call" href="tel:9735088737">
              973-508-8737
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
