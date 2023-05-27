import React from "react";
import ProfilePic from "../../images/PFP.png";
import "./HomeStyles.scss";

const Home = () => {
  return (
    <section id="Home">
      <article>
        <img src={ProfilePic} />
        <p>
          Cam.<span>Code</span>
        </p>
      </article>
      <a href="#About">
        <button>explore</button>
      </a>
    </section>
  );
};

export default Home;
