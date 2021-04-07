import React from "react";
import HomeText from "../components/HomeText";
import Content from "../components/Content";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FoodTruck from "../assets/images/foodtruck.png";
import Robot from "../assets/images/robot.png";
import President from "../assets/images/president.png";
import Google from "../assets/images/google.png";
import Journal from "../assets/images/journal.png";
import ReadByHumans from "../assets/images/readByHumans.png";

const PortfolioPage = (props) => {
  return (
    <div id="portfolioPage" style={{backgroundColor:"white", padding:"3%"}}>
      <div style={{
            color: "black",
            backgroundColor:"red",
            margin: "5%",
            marginBottom: "10%",
            fontFamily: "monospace",
            boxShadow: "0px 15px 70px -7px gray",
            borderRadius: "20px",
        }}>
      <HomeText title={props.title} />
      <Row className="justify-content-center py-1">
        <Col xs="9">
          <Content>
          <div style={{
          color: "black",
          backgroundColor:"white",
          margin: "5%",
          padding: "10%",
          marginBottom: "15%",
          fontFamily: "monospace",
          boxShadow: "10px 20px",
          borderRadius: "20px",
          fontSize:"35px"
        }}>portfolio page</div>
            <Container>
              <ol>
                <li>
                  <p>
                    Created a site to search for any book from Google book API.
                    Built with react and google API, used bootstrap and common
                    css for styling. Used npm smooth scroll for one continous
                    page. Used Axios for my fetch calls as well.
                    <br />
                    <a
                      style={{ display: "table-cell" }}
                      href="https://eloquent-benz-ba9740.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="g-card-image"
                        src={ReadByHumans}
                        alt="Read By Humans"
                      />{" "}
                    </a>
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    Created a fake google a replica of google to test my skill
                    of react and firebase learning. You can search using the
                    google api and has clickable links. The frontend is built
                    with React, and the backend is built with Firebase. Built
                    this project to understand more about React, redux, css and
                    to learn Firebase software.
                    <br />
                    <a
                      style={{ display: "table-cell" }}
                      href="https://fake-fun.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="g-card-image"
                        src={Google}
                        alt="google app"
                      />{" "}
                    </a>
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    Pres-inder is an application for people to vote but through
                    tinder like swipe motion. Most of my app are surrounded
                    around COVID times, to help the people stay safe and add
                    value to the community of politics. You can message in
                    between user's and swipe through your favorite presidents.
                    The frontend is built with React, and the backend is built
                    with Firebase. Built this project to practice/understand
                    more about React, Material-ui and to learn Firebase
                    software.
                    <br />
                    <a
                      style={{ display: "table-cell" }}
                      href="https://tinder-clone-9d53e.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="g-card-image"
                        src={President}
                        alt="tinder clone app"
                      />{" "}
                    </a>
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    Robot Maker is an application for kids, particularly in
                    COVID times, to build robots and parts. Users can create
                    robots and view robots. I also built this to remind myself
                    not to take it to serious and have fun with what i build.
                    The frontend is built with React/Redux, and the backend is
                    built with a Rails API. I used this project as an
                    opportunity to practice with understanding React and Redux,
                    maintaining page context through react-router-dom, and
                    managing the flow of data between a decoupled frontend and
                    backend.
                    <br />
                    <a
                      style={{ display: "table-cell" }}
                      href="https://zen-hopper-ce8178.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="g-card-image"
                        src={Robot}
                        alt="robotmaker app"
                      />
                    </a>
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    Food Truck Review is my Rails portfolio project for the
                    Flatiron coding bootcamp. It is an application for users to
                    view, add, and reviewing food trucks. In this project, I
                    tried Test Driven Development for the first time,
                    implemented dynamic SQL searching capability, and integrated
                    GitHub oauth.
                    <br />
                    <a
                      style={{ display: "table-cell" }}
                      href="https://github.com/jonbleibdrey/rails_food_truck_review"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <img
                        className="g-card-image"
                        src={FoodTruck}
                        alt="foodtruck app"
                      />{" "}
                    </a>
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    This was my second portfolio project for the Flatiron
                    software engineering program. It's meant to demonstrate my
                    competence with the Sinatra web framework. I built a journal
                    application for managing users journals and if you wanted to
                    share with other people you could do that also.
                    <br />
                    <a
                      style={{ display: "table-cell" }}
                      href="https://github.com/jonbleibdrey/the_spiritual_thought"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <img
                        className="g-card-image"
                        src={Journal}
                        alt="journal app"
                      />{" "}
                    </a>
                  </p>
                </li>
                <br />
                <br />
                <p>
                  Check out more work on my github
                  <a
                    style={{ display: "table-cell" }}
                    href="https://github.com/jonbleibdrey"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    here.{" "}
                  </a>
                </p>
              </ol>
            </Container>
          </Content>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default PortfolioPage;
