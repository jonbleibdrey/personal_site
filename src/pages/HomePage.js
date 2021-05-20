import React from "react";
import HomeText from "../components/HomeText";
import Clickable from "../components/Clickable";
import "../css/home.css";

function HomePage(props) {
  return (
    <div id="homePage" className="home__completeDiv">
      <div className="home__div">
        <HomeText
          title={props.title}
          subTitle={props.subTitle}
          text={props.text}
        />
        <div >
            <Clickable />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
