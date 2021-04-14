import React from "react";
import Content from "../components/Content";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LogoFile from "../components/LogoFile";
import InformationAbout from "../components/InformationAbout";
import "../css/about.css";

function AboutPage(props) {
  return (
    <div id="aboutPage" className="about__completeDiv">
      <div className="about__div">
        <Content>
          <div className="about__content">About</div>
        </Content>
        <Container>
          <Row>
            <Col xs={6} lg={6}>
              <InformationAbout />
            </Col>
            <Col xs={6} lg={6}>
              <LogoFile />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutPage;
