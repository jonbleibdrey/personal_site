import React from "react";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <div id="navbar" className="navbar top">
      <h1 className="logo">
        <span className="text-primary">
          <i className="fa fa-skull"></i> Jonathan
        </span>
        Bleibdrey
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
