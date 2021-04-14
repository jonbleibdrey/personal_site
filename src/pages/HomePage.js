import React from "react";
import HomeText from "../components/HomeText";
import Clickable from "../components/Clickable";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
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
        <Row className="py-1">
          <Col sm={12} lg={12}>
            <Clickable />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
