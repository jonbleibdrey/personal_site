import React from "react";
import "../css/about.css";

const InformationAbout = () => {
  return (
    <div className="about__header">
      <h3>
        Hello, my name is Jonathan. I'm a full stack engineer with experience in
        Javascript, React, Ruby, and Rails.
      </h3>
      <br />

      <h3>
        My dream is to show people that we are naturally left and right brain,
        that we have the capability to be smart and creative.{" "}
      </h3>
      <br />
      <h3>
        I'm constantly learning new things, enjoying the process and keeping up
        with new tech. Currently I'm gaining more experience with Javascript,
        React and Firebase.
      </h3>
      <br />
      <h3>
        My last couple of projects were based on the economics of where I think
        the world is going during the Covid-19 period. You can find my code
        <a
          className="about__aTag"
          href="https://github.com/jonbleibdrey"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          here
        </a>
        .
      </h3>
      <br />
      <h3>
        When I'm not learning something new, chances are I'm creating some type
        of art, shooting archery, and I also dabble in photography. Which you
        can find{" "}
        <a
          className="about__aTag"
          href="https://www.instagram.com/johnnyb.experience/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          here.
        </a>
      </h3>
    </div>
  );
};

export default InformationAbout;
