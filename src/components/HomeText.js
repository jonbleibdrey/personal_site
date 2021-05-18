import React from "react";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jon from "../assets/images/jon.jpg";

function HomeText(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container>
        <Row className="ml-4">
          <Col xs={12} lg={12}>
            <div class="typewriter">
              <div class="typewriter-text">
                {props.title && (
                  <h1
                    className="display-3 font-weight-bolder ml-5"
                    id="homeText__div"
                  >
                    {props.title}
                  </h1>
                )}
              </div>
            </div>
            <br />
            <br />
            {props.subTitle && (
              <h3 className="font-weight-bold ml-5" id="homeText__div">
                {props.subTitle}{" "}
              </h3>
            )}
            <br />
            <br />
            {props.text && (
              <h3 className=" font-weight-light ml-5" id="homeText__div">
                {props.text}
              </h3>
            )}
            <div>
              <img
                style={{
                  height: "30rem",
                  width: "40rem",
                  marginLeft: "15rem",
                  marginTop: "5rem",
                  borderRadius:"5rem"
                }}
                src={Jon}
                alt="my face"
              />
              <h4 style={{ marginLeft: "30rem", marginTop:"5rem", marginBottom:"-9rem" }}>That's me!</h4>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HomeText;
