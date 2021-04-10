import React from "react";
import HomeText from "../components/HomeText";
import Carousel from "../components/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";

function HomePage(props) {
  return (
    <div id="homePage" style={{ padding: "2%" }}>
      <div
        style={{
          color: "black",
          margin: "5%",
          marginBottom: "5%",
          fontFamily: "monospace",
          boxShadow: "-30px 40px 11px 40px #ccc",
          borderRadius: "50px",
          backgroundColor:"white"
        }}
      >
        <HomeText
          title={props.title}
          subTitle={props.subTitle}
          text={props.text}
        />
        <Row className="justify-content-center py-1">
          <Col xs={12}>
            <Carousel />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
