import { React } from "react";
import { useState } from "react";
import "./NavStyles.scss";

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const nav = [
    {
      link: "#Home",
      icon: "home-outline",
      text: "Home",
    },
    {
      link: "#About",
      icon: "person-circle-outline",
      text: "About",
    },
    {
      link: "#Portfolio",
      icon: "library-outline",
      text: "Portfolio",
    },
    {
      link: "#Contact",
      icon: "mail-outline",
      text: "Contact",
    },
  ];
  return (
    <nav>
      <ul>
        {nav.map(({ link, icon, text }, index) => {
          return (
            <li
              class={activeIndex === index && "active"}
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              <a href={link}>{text}</a>
              <ion-icon name={icon}></ion-icon>
            </li>
          );
        })}
        <aside>
          <div className="marker"></div>
        </aside>
      </ul>
    </nav>
  );
};

export default Nav;
