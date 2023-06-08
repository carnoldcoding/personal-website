import React from "react";
import { useState } from "react";
import "./MobileNavStyles.scss";

const MobileNav = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    const body = document.querySelector("body");
    visible ? (body.style.overflow = "auto") : (body.style.overflow = "hidden");
    setVisible(!visible);
  };
  return (
    <>
      <article className="mobile-nav">
        <aside>
          <ion-icon
            onClick={handleClick}
            name={visible ? "close-outline" : "menu-outline"}
          ></ion-icon>
        </aside>
          <ul class={visible && "active"}>
            <li onClick={handleClick}>
              <a href="#Home">Home</a>
            </li>
            <li onClick={handleClick}>
              <a href="#About">About</a>
            </li>
            <li onClick={handleClick}>
              <a href="#Experience">Experience</a>
            </li>
            <li onClick={handleClick}>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li onClick={handleClick}>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
      </article>
    </>
  );
};

export default MobileNav;
