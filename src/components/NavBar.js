import React from "react";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div>
      <Navbar className="border-bottom" bg="transparent" expand="lg">
        <NavbarBrand>Jonathan Robert Bleibdrey</NavbarBrand>
        <NavbarToggle className="border-0" aria-controls="navbar-toggle" />
        <NavbarCollapse className="justify-content-end p-4" id="navbar-toggle">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="homePage"
              style={{
                padding: "10px",
                border: "none",
                color: "black",
              }}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={150}
              duration={500}
              to="aboutPage"
              style={{
                padding: "10px",
                border: "none",
                color: "black",
              }}
            >
              About
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              to="portfolioPage"
              style={{
                padding: "10px",
                border: "none",
                color: "black",
              }}
            >
              Portfolio
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
              to="contactPage"
              style={{
                padding: "10px",
                border:"none",
                color:"black"
              }}
            >
              Contact
            </Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
