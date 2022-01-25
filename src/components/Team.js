import React from "react";
import Jon from "../assets/images/jon.jpeg";
const Team = () => {
  return (
    <section id="team" className="team section-padding">
      <header className="section-header">
        <h4>Who we are</h4>
        <h2>Our Professional Team</h2>
        <p>
          Its basically just me, so until further notice, this is "our" team.
        </p>
      </header>
      <div className="flex-items">
        <div>
          <img src={Jon} alt="jon" />
          <h4>Jonathan Bleibdrey</h4>
          <p>President,Creator,Marketing,Sales, etc...</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
