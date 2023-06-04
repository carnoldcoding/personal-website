import React from "react";
import "./ContactStyles.scss";

const Contact = () => {
  return (
    <section id="Contact">
      <h1>get in touch!</h1>
      <div class="contact">
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
            <a class="call" href="tel:9735088737">
              973-508-8737
            </a>
            <a class="mail" href="mailto:carnoldcoding@gmail.com">
              @carnoldcoding
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
