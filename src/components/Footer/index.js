import React from "react";
import "./FooterStyles.scss";

const ContactBar = () => {
  return (
    <>
      <article className="contact-bar">
        <ul>
          <li>
            <a href="" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
          </li>
          <li>
            <a href="" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
          </li>
          <li>
            <a href="" target="_blank"><ion-icon name="logo-figma"></ion-icon></a>
          </li>
          <li>
            <a href="" target="_blank"><ion-icon name="mail"></ion-icon></a>
          </li>
        </ul>
     <div className="line"></div> 
      </article>
    </>
  );
};

export default ContactBar;
