import React from "react";
import "./MobileFooterStyles.scss";

const MobileFooter = () => {
  return (
    <article className="mobile-contact-bar">
      <h3>© Cameron Arnold </h3>
      <ul>
        <li>
          <a href="https://github.com/carnoldcoding/" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/cameron-arnold-8b47281a0/"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="https://www.figma.com/files/user/1117910517398208271?fuid=1117910517398208271"
            target="_blank"
          >
            <ion-icon name="logo-figma"></ion-icon>
          </a>
        </li>
        <li>
          <a href="mailto:carnoldcoding@gmail.com" target="_blank">
            <ion-icon name="mail"></ion-icon>
          </a>
        </li>
      </ul>
      <div className="line"></div>
    </article>
  );
};

export default MobileFooter;
