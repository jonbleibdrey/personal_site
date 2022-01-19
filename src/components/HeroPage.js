import React from "react";
import "../css/hero.css";

const HeroPage = () => {
  return (
    <div className="content">
      <h1>I have the Power to create world's</h1>
      <p>"what goes up, must come down"</p>
      <a href="/" className="btn">
        <i className="fas fa-chevron-right"></i> Read More
      </a>
    </div>
  );
};

export default HeroPage;
