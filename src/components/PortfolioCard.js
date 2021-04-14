import React from "react";
import Robot from "../assets/images/robot.png";
import President from "../assets/images/president.png";
import Google from "../assets/images/google.png";
import ReadByHumans from "../assets/images/readByHumans.png";
import { Card } from "react-bootstrap";
import "../css/portfolio.css";

const PortfolioCard = () => {
  return (
    <div>
      <Card
        className="portfolio__card"
        style={{
          margin: "1%",
          marginBottom: "10%",
          boxShadow: "-10px 12px 20px 13px #ccc",
          borderRadius: "15px",
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
            src={ReadByHumans}
            alt="Read By Humans"
            style={{
              maxHeight: "400px",
              minHeight: "200px",
              borderRadius: "15px",
            }}
            //   could not style with css
          />
        </a>
        <Card.Body className="portfolio__cardBody">
          <Card.Title>Read By Humans</Card.Title>
          <Card.Text>
            Created a site to search for any book from Google book API. Built
            with react and google API, used bootstrap and common css for
            styling. Used npm smooth scroll for one continous page. Used Axios
            for my fetch calls as well.
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
