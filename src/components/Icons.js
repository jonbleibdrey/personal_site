import React from "react";
import "../css/icons.css";

const Icons = () => {
  return (
    <section id="about" className="icons bg-light">
      <div className="flex-items">
        <div>
          <i class="fa-solid fa-user-group fa-2x"></i>
          <div>
            <h3>Team Player</h3>
            <p>
              I believe that you cant go through this world as a lone wolf. You
              have to play well with others, especially if you dont agree with
              the other person.
            </p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-person-running fa-2x"></i>
          <div>
            <h3>Multi Tasker</h3>
            <p>
              I have worked In high stressed situations in the streets of NYC
              from my background in film and photography.
            </p>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-spray-can-sparkles fa-2x"></i>
          <div>
            <h3>Creative Problem Solver</h3>
            <p>
              I love to solve problems, It teaches me peace. Life is about tackling the hard stuff, without losing your cool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Icons;
