import React from "react";
import HomeText from "../components/HomeText";
import Carousel from "../components/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";

function HomePage(props) {
  return (
    <div id="homePage">
      <HomeText
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
      />
      <Row className="justify-content-center py-1">
        <Col xs="8">
          <div className="images__homepage">
            <img
              align="center"
              alt="JavaScript"
              width="50px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
            />
            <img
              align="center"
              alt="React"
              width="50px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
            />
            <img
              align="center"
              alt="Redux"
              width="50px"
              src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
            />
            <img
              align="center"
              alt="Ruby"
              width="50px"
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
            />
            <img
              align="center"
              alt="Ruby on Rails"
              width="50px"
              src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png"
            />
            <img
              align="center"
              alt="HTML5"
              width="50px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
            />
            <img
              align="center"
              alt="CSS3"
              width="50px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
            />
            <img
              align="center"
              alt="bootstap"
              width="50px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
            />
            <img
              align="center"
              alt="SQL"
              width="50px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"
            />
            <img
              align="center"
              alt="firebase"
              width="50px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
            />
            <img
              align="center"
              alt="Git"
              width="50px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
            />
            <img
              align="center"
              alt="GitHub"
              width="50px"
              src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
            />
            <img
              align="center"
              alt="Visual Studio Code"
              width="50px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
            />
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <Row className="justify-content-center py-1">
        <Col xs="8">
          <Carousel />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
