import React from 'react';
import "../css/about.css"
import buddha from "../assets/images/buddha.jpeg"

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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              officia, ex sint veniam accusamus nostrum facere voluptatum nisi
              tempore sunt voluptatibus praesentium cupiditate molestias
              debitis laboriosam vitae explicabo accusantium! Voluptatibus.
            </p>
            <a href="/" class="btn btn-outline">
              <i class="fas fa-chevron"></i>
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
