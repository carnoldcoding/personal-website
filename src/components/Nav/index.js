import { React } from "react";
import "./NavStyles.scss";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li data-to-scrollspy-id="Home">
          <a href="#Home">Home</a>
          <ion-icon name="home-outline"></ion-icon>
        </li>
        <li>
          <a href="#About">About</a>
          <ion-icon name="person-circle-outline"></ion-icon>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
          <ion-icon name="library-outline"></ion-icon>
        </li>
        <li>
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
