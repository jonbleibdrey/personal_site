import React from "react";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link} from "react-scroll";

const NavBar = () => {
  return (
    <div>
      <Navbar className="border-bottom" bg="transparent" expand="lg">
        <NavbarBrand>Jonathan Robert Bleibdrey</NavbarBrand>
        <NavbarToggle className="border-0" aria-controls="navbar-toggle" />
        <NavbarCollapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="homePage"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="aboutPage"
            >
              About
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="portfolioPage"
            >
              Portfolio
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contactPage"
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
