import React from "react";
import "../css/project.css";
import Lookup from "../assets/images/lookUp.png";
import YumYum from "../assets/images/yumyum.png";
import Todo from "../assets/images/todo.png";
import ReadByHumans from "../assets/images/readByHumans.png";
import Google from "../assets/images/google.png";
import President from "../assets/images/president.png";
import Robot from "../assets/images/robot.png";
import FoodTruck from "../assets/images/foodtruck.png";

const Projects = () => {
  return (
    <section id="cases" class="cases flex-grid section-padding">
      <header class="section-header">
        <h4>What I've worked on...</h4>
        <h2>Portfolio</h2>
        <p>
          I try to practice broad projects, as well as consistently producing
          new projects, and I also remember to keep it light.
        </p>
      </header>
      <div class="row">
        <div class="column">
          <a
            href="https://affectionate-agnesi-a20650.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Lookup} alt="look up" />
          </a>
          <a
            href="https://yumyumfresh.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={YumYum} alt=" yum yum" />
          </a>
        </div>
        <div class="column">
          <a
            href="https://blissful-northcutt-caae64.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Todo} alt="todo" />
          </a>
          <a
            href="https://eloquent-benz-ba9740.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ReadByHumans} alt="read by humans" />
          </a>
        </div>
        <div class="column">
          <a href="https://fake-fun.web.app" target="_blank" rel="noreferrer">
            <img src={Google} alt=" google" />
          </a>
          <a
            href="https://tinder-clone-9d53e.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={President} alt="president" />
          </a>
        </div>
        <div class="column">
          <a
            href="https://zen-hopper-ce8178.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Robot} alt="robot" />
          </a>
          <a
            href="https://github.com/jonbleibdrey/rails_food_truck_review"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FoodTruck} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
