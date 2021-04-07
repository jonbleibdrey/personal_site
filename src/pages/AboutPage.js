import React from "react";
import HomeText from "../components/HomeText";
import Content from "../components/Content";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AboutPage(props) {
  return (
    <div id="aboutPage" style={{ backgroundColor: "white", padding: "3%" }}>
      <div
        style={{
          color: "black",
          margin: "5%",
          marginBottom: "10%",
          fontFamily: "monospace",
          boxShadow: "0px 15px 70px -7px gray",
          borderRadius: "20px",
        }}
      >
        <HomeText title={props.title} />
        <Row className="justify-content-center py-5">
          <Col xs={9} lg={12}>
            <Content>
              <Container>
                <div
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    margin: "5%",
                    padding: "10%",
                    marginBottom: "15%",
                    fontFamily: "monospace",
                    border: "1px solid black",
                    boxShadow: "10px 20px",
                    borderRadius: "20px",
                    fontSize: "35px",
                  }}
                >
                  AboutPage
                </div>

                <h3>
                  Hello, my name is Jonathan. I'm a full stack engineer with
                  experience in Javascript, React, Ruby, and Rails.
                </h3>
                <br />

                <h3>
                  My dream is to show people that we are naturally left and
                  right brain, that we have the capability to be smart and
                  creative.{" "}
                </h3>
                <br />
                <h3>
                  I'm constantly learning new things and keeping up with new
                  tech. Currently those things include gaining more experience
                  with Javascript, React and Firebase
                </h3>
                <br />
                <h3>
                  My last couple of projects, where based on the economics of
                  where I think the world is going, during the Covid-19 period.
                  You can find them
                  <a
                    style={{ color: "black" }}
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
                  When I'm not learning something new chances are I'm creating
                  some type of art. Which you can find photography{" "}
                  <a
                    style={{ color: "black" }}
                    href="https://www.instagram.com/johnnyb.experience/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    here
                  </a>
                  . or drawings{" "}
                  <a
                    style={{ color: "black" }}
                    href="https://www.instagram.com/johnnyb.exploration/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    here.{" "}
                  </a>{" "}
                </h3>
              </Container>
            </Content>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutPage;
