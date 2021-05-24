import React from "react";
import HomeText from "../components/HomeText";
import Clickable from "../components/Clickable";
import "../css/home.css";

function HomePage({ title, subTitle, text }) {
  return (
    <div id="homePage" className="home__completeDiv">
      <div className="home__div">
        <HomeText title={title} subTitle={subTitle} text={text} />
        <div>
          <Clickable />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
