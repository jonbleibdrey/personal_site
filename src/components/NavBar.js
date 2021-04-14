import React from "react";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { Col, Jumbotron, Row } from "react-bootstrap";
import "../css/navBar.css";

const NavBar = () => {
  return (
    <Row>
      <Col xs={12} lg={12}>
        <Navbar className="border-bottom" expand="lg" id="navBar__div">
          <Jumbotron className="bg-transparent p-0">
            <h1 className="display-4 font-weight-bolder" id="navBar__header">
              JONATHAN BLEIBDREY
            </h1>
          </Jumbotron>
          <NavbarToggle className="border-0" aria-controls="navbar-toggle" />
          <NavbarCollapse
            className="justify-content-end p-4"
            id="navbar-toggle"
          >
            <Nav className="ml-auto">
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={200}
                duration={1400}
                to="homePage"
                className="navBar__link"
              >
                <AiFillHome />
              </Link>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={70}
                duration={1300}
                to="aboutPage"
                className="navBar__link"
              >
                <BsFillPersonFill />
              </Link>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={10}
                duration={1200}
                to="portfolioPage"
                className="navBar__link"
              >
                <FaBookOpen />
              </Link>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={10}
                duration={1100}
                to="contactPage"
                className="navBar__link"
              >
                <MdContactMail />
              </Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default NavBar;
