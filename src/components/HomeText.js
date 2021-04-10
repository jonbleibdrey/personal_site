import React from "react";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeText(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container>
        <Row className="ml-5">
          <Col md={4} sm={8} lg={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder ml-5">
                {props.title}
              </h1>
            )}
            <br />
            <br />
            {props.subTitle && (
              <h3 className="display-4 font-weight-light ml-3">
                {props.subTitle}
              </h3>
            )}
            <br />
            <br />
            {props.text && (
              <h3 className="lead font-weight-light ml-5">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HomeText;
