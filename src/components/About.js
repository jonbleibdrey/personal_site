import React from "react";
import "../css/about.css";
import buddha from "../assets/images/buddha.jpeg";

const About = () => {
  return (
    <section class="solutions flex-columns">
      <div class="row">
        <div class="column">
          <div class="column-1">
            <img src={buddha} alt="buddha" />
          </div>
        </div>
        <div class="column">
          <div class="column-2 bg-primary">
            <h4>I am what you are looking for.</h4>
            <h2>I get things done!</h2>
            <p>
              I am a capricorn with a strong sense of direction, I have a work
              ethic that no one can compare too, and Im reliable.
              <br />
              Link below for github information.
            </p>
            <a
              href="https://github.com/jonbleibdrey"
              target="_blank"
              rel="noreferrer"
              class="btn btn-outline"
            >
              <i class="fas fa-chevron"></i>
              Github Here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
