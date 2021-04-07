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
import { Jumbotron } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar
        className="border-bottom"
        expand="lg"
        style={{
          boxShadow: "0px 30px 100px -30px gray",
          borderRadius: "20px",
          margin: "1%",
        }}
      >
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
          <h1
            className="display-5 font-weight-bolder"
            style={{
              marginTop: "30px",
              fontFamily: "monospace",
              marginLeft: "50px",
            }}
          >
            JONATHAN BLEIBDREY
          </h1>
        </Jumbotron>
        <NavbarToggle className="border-0" aria-controls="navbar-toggle" />
        <NavbarCollapse className="justify-content-end p-4" id="navbar-toggle">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={120}
              duration={500}
              to="homePage"
              style={{
                padding: "10px",
                border: "none",
                color: "black",
                fontSize: "40px",
              }}
            >
              <AiFillHome />
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={70}
              duration={1000}
              to="aboutPage"
              style={{
                padding: "10px",
                border: "none",
                color: "black",
                fontSize: "40px",
              }}
            >
              <BsFillPersonFill />
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={300}
              duration={1500}
              to="portfolioPage"
              style={{
                padding: "10px",
                border: "none",
                color: "black",
                fontSize: "40px",
              }}
            >
              <FaBookOpen />
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={130}
              duration={2000}
              to="contactPage"
              style={{
                padding: "10px",
                border: "none",
                color: "black",
                fontSize: "40px",
              }}
            >
              <MdContactMail />
            </Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
