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
          boxShadow: "-9px 10px 20px 7px #ccc",
          borderRadius: "20px",
          margin: "1%",
          backgroundColor: "white"
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
              offset={200}
              duration={1400}
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
              duration={1300}
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
              offset={10}
              duration={1200}
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
              offset={10}
              duration={1100}
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
