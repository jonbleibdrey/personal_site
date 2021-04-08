import React from "react";
import HomeText from "../components/HomeText";
import Carousel from "../components/Carousel";
import LogoBand from "../components/LogoBand";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";

function HomePage(props) {
  return (
    <div id="homePage" style={{ backgroundColor: "white", padding: "3%" }}>
      <div
        style={{
          color: "black",
          margin: "5%",
          marginBottom: "5%",
          fontFamily: "monospace",
          boxShadow: "30px 40px 100px 30px #ccc",
          borderRadius: "20px",
        }}
      >
        <HomeText
          title={props.title}
          subTitle={props.subTitle}
          text={props.text}
        />
        <Row className="justify-content-center py-1">
          <Col xs={12}>
            <LogoBand />
            <Carousel />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
