import { React } from "react";
import { useState } from "react";
import "./NavStyles.scss";

const Nav = () => {
  const [active, setActive] = useState("home");
  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            setActive("home");
          }}
          className={active === "home" && "active"}
        >
          <a href="#Home">Home</a>
          <ion-icon name="home-outline"></ion-icon>
        </li>
        <li
          onClick={() => {
            setActive("about");
          }}
          className={active === "about" && "active"}
        >
          <a href="#About">About</a>
          <ion-icon name="person-circle-outline"></ion-icon>
        </li>
        <li
          onClick={() => {
            setActive("portfolio");
          }}
          className={active === "portfolio" && "active"}
        >
          <a href="#Portfolio">Portfolio</a>
          <ion-icon name="library-outline"></ion-icon>
        </li>
        <li
          onClick={() => {
            setActive("contact");
          }}
          className={active === "contact" && "active"}
        >
          <a href="#Contact">Contact</a>
          <ion-icon name="mail-outline"></ion-icon>
        </li>
        <aside>
          <div className="marker"></div>
        </aside>
      </ul>
    </nav>
  );
};

export default Nav;
