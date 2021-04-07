import React from "react";
import HomeText from "../components/HomeText";
import Carousel from "../components/Carousel";
import LogoBand from "../components/LogoBand";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../App.css";

function HomePage(props) {
  return (
    <div id="homePage" style={{backgroundColor:"white", padding:"3%",}}>
      <div style={{
          color: "black",
          backgroundColor:"green",
          margin: "5%",
          marginBottom: "10%",
          fontFamily: "monospace",
          boxShadow: "10px 15px 100px -7px gray",
          borderRadius: "20px",
        }}>
      <HomeText
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
      />
      <Row className="justify-content-center py-1">
        <Col xs="8">
          <div className="images__homepage">
           <LogoBand/>
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
    </div>
  );
}

export default HomePage;
