import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Content(props) {
  return (
    <div>
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md={8}>{props.children}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
