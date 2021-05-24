import React from "react";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jon from "../assets/images/jon.jpg";

function HomeText({ title, subTitle, text }) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container>
        <Row className="ml-4">
          <Col xs={12} lg={12}>
            <div class="typewriter">
              <div class="typewriter-text">
                {title && (
                  <h1
                    className="display-3 font-weight-bolder ml-5"
                    id="homeText__div"
                  >
                    {title}
                  </h1>
                )}
              </div>
            </div>
            <br />
            <br />
            {subTitle && (
              <h3 className="font-weight-bold ml-5" id="homeText__div">
                {subTitle}{" "}
              </h3>
            )}
            <br />
            <br />
            {text && (
              <h3 className=" font-weight-light ml-5" id="homeText__div">
                {text}
              </h3>
            )}
            <div>
              <img className="home__img" src={Jon} alt="my face" />
              <h4 className="home__h4">That's me!</h4>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HomeText;
