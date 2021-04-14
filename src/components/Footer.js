import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/footer.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <a href="https://twitter.com/jonbleibdrey">
              <AiOutlineTwitter className="footer__logo" />
            </a>
            <a href="https://www.facebook.com/jbleibdrey/">
              <AiFillFacebook className="footer__logo" />
            </a>
            <a href="http://www.instagram.com/johnnyb.exploration">
              <AiFillInstagram className="footer__logo" />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-bleibdrey-4032171b9/">
              <AiFillLinkedin className="footer__logo" />
            </a>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            Copyright © 2020-Jonathan Bleibdrey. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
