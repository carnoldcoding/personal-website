import { React, useEffect, useRef } from "react";
import "./NavStyles.scss";
import { gsap } from "gsap";
import { Power3 } from "gsap/gsap-core";

const Nav = () => {
  const navItems = useRef([]);
  const scope = useRef();
  const bar = useRef();
  const tl = gsap.timeline();

  useEffect(() => {
    let ctx = gsap.context(() => {
      navItems.current.forEach((navItem) => {
        tl.from(
          navItem,
          {
            x: 100,
            opacity: 0,
            duration: 0.5,
            ease: Power3
          },
          "-=.3"
        );
      });
      tl.from(
        bar.current,
        {
          height: 0,
          ease: Power3,
        },
        "-=.2"
      );
    }, scope);

    return () => ctx.revert();
  });
  return (
    <nav ref={scope}>
      <ul>
        <li
          data-to-scrollspy-id="Home"
          ref={(el) => {
            navItems.current.push(el);
          }}
        >
          <a href="#Home">Home</a>
          <ion-icon name="home-outline"></ion-icon>
        </li>
        <li
          data-to-scrollspy-id="About"
          ref={(el) => {
            navItems.current.push(el);
          }}
        >
          <a href="#About">About</a>
          <ion-icon name="person-circle-outline"></ion-icon>
        </li>
        <li
          data-to-scrollspy-id="Portfolio"
          ref={(el) => navItems.current.push(el)}
        >
          <a href="#Portfolio">Portfolio</a>
          <ion-icon name="library-outline"></ion-icon>
        </li>
        <li
          data-to-scrollspy-id="Contact"
          ref={(el) => navItems.current.push(el)}
        >
          <a href="#Contact">Contact</a>
          <ion-icon name="mail-outline"></ion-icon>
        </li>
        <aside ref={bar}>
          <div className="marker"></div>
        </aside>
      </ul>
    </nav>
  );
};

export default Nav;
