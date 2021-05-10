import React from "react";
import Robot from "../assets/images/robot.png";
import President from "../assets/images/president.png";
import Google from "../assets/images/google.png";
import YumYum from "../assets/images/yumyum.png";
import { Card } from "react-bootstrap";
import "../css/portfolio.css";

const PortfolioCard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Card
        className="portfolio__card"
        style={{
          margin: "1%",
          marginTop: "10%",
          marginBottom: "10%",
          boxShadow: "-10px 12px 20px 13px #ccc",
          borderRadius: "15px",
          paddingBottom:"5%"
        }}
        //   could not style with css
      >
        <a
          href="https://eloquent-benz-ba9740.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Card.Img
            variant="top"
            src={YumYum}
            alt="Read By Humans"
            style={{
              maxHeight: "300px",
              minHeight: "150px",
              borderRadius: "15px",
              
            }}
            //   could not style with css
          />
        </a>
        <Card.Body className="portfolio__cardBody">
          <Card.Title>Yum Yum Fresh</Card.Title>
          <Card.Text>
            A site to search for Produce in your local area. Built with react,
            geolocation, and ruby backend, used bootstrap and common css for
            styling. Used npm fil card.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          margin: "1%",
          marginBottom: "10%",
          boxShadow: "-10px 12px 20px 13px #ccc",
          borderRadius: "15px",
        }}
        //   could not style with css
      >
        <a href="https://fake-fun.web.app" target="_blank" rel="noreferrer">
          <Card.Img
            variant="top"
            src={Google}
            alt="google app"
            style={{
              maxHeight: "400px",
              minHeight: "200px",
              borderRadius: "15px",
            }}
            //   could not style with css
          />
        </a>
        <Card.Body className="portfolio__cardBody">
          <Card.Title>Google app</Card.Title>
          <Card.Text>
            Created a fake google a replica of google to test my skill of react
            and firebase learning. You can search using the google api and has
            clickable links. The frontend is built with React, and the backend
            is built with Firebase. Built this project to understand more about
            React, redux, css and to learn Firebase software.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          margin: "1%",
          marginBottom: "10%",
          boxShadow: "-10px 12px 20px 13px #ccc",
          borderRadius: "15px",
        }}
        //   could not style with css
      >
        <a
          href="https://tinder-clone-9d53e.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Card.Img
            variant="top"
            src={President}
            alt="tinder clone app"
            style={{
              maxHeight: "400px",
              minHeight: "200px",
              borderRadius: "15px",
            }}
            //   could not style with css
          />
        </a>
        <Card.Body className="portfolio__cardBody">
          <Card.Title>president Tinder</Card.Title>
          <Card.Text>
            Pres-inder is an application for people to vote but, through tinder
            like swipe motion. You can message in between user's and swipe
            through your favorite presidents. The frontend is built with React,
            and the backend is built with Firebase.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{
          margin: "1%",
          marginBottom: "10%",
          boxShadow: "-10px 12px 20px 13px #ccc",
          borderRadius: "15px",
        }}
        //   could not style with css
      >
        <a
          href="https://zen-hopper-ce8178.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Card.Img
            variant="top"
            src={Robot}
            alt="robotmaker app"
            style={{
              maxHeight: "400px",
              minHeight: "200px",
              borderRadius: "15px",
            }}
            //   could not style with css
          />
        </a>
        <Card.Body className="portfolio__cardBody">
          <Card.Title>Robot Maker</Card.Title>
          <Card.Text>
            Robot Maker is an application for kids, playful site, to build
            robots and parts. Users can create robots and view robots. The
            frontend is built with React/Redux, and the backend is built with a
            Rails API. It helped me maintain page context through
            react-router-dom, and managing the flow of data between a decoupled
            frontend and backend.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PortfolioCard;
