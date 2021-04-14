import React from "react";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeText(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container>
        <Row className="ml-4">
          <Col sm={12} lg={12}>
            {props.title && (
              <h1 className="display-3 font-weight-bolder ml-5">
                {props.title}
              </h1>
            )}
            <br />
            <br />
            {props.subTitle && (
              <h3 className="font-weight-bold ml-5">{props.subTitle}</h3>
            )}
            <br />
            <br />
            {props.text && (
              <h3 className=" font-weight-light ml-5">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HomeText;
