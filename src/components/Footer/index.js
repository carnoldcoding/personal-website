import React from "react";
import "./FooterStyles.scss";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const ContactBar = () => {
    const scope = useRef();
    const tl = useRef();
    const links = useRef([]);
    const line = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline();
        tl.current.from(scope, {delay: 1.6})
        links.current.forEach(link=>{
            tl.current.to(
                link,{
                    y: 0,
                    rotate: 0,
                    opacity: 1,
                    duration: .4,
                }, "-=.2"
            )
        })
        tl.current.to(line.current,{
            height: 100,
            duration: .5
        }, "-=.2")

          }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <article className="contact-bar" ref={scope}>
        <ul>
          <li ref={(e)=>links.current.push(e)}>
            <a href="https://github.com/carnoldcoding/" target="_blank">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li ref={(e)=>links.current.push(e)}>
            <a href="https://www.linkedin.com/in/cameron-arnold-8b47281a0/" target="_blank">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li ref={(e)=>links.current.push(e)}>
            <a
              href="https://www.figma.com/files/user/1117910517398208271?fuid=1117910517398208271"
              target="_blank"
            >
              <ion-icon name="logo-figma"></ion-icon>
            </a>
          </li>
          <li ref={(e)=>links.current.push(e)}>
            <a href="mailto:carnoldcoding@gmail.com" target="_blank">
              <ion-icon name="mail"></ion-icon>
            </a>
          </li>
        </ul>
        <div className="line" ref={line}></div>
      </article>
    </>
  );
};

export default ContactBar;
