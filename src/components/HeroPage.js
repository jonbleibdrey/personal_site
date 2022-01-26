import React from "react";
import "../css/hero.css";

const HeroPage = () => {
  return (
    <div id="hero" className="content">
      <h1>I have the Power to create world's</h1>
      <p>"what goes up, must come down"</p>
      <a
        href="https://www.linkedin.com/in/jonathan-bleibdrey-4032171b9/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <i className="fas fa-chevron-right"></i> More About Me
      </a>
    </div>
  );
};

export default HeroPage;
