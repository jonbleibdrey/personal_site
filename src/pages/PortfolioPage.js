import React from "react";
import HomeText from "../components/HomeText";
import Content from "../components/Content";
import { Button, Card, Container, CardDeck } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FoodTruck from "../assets/images/foodtruck.png";
import Robot from "../assets/images/robot.png";
import President from "../assets/images/president.png";
import Google from "../assets/images/google.png";
import ReadByHumans from "../assets/images/readByHumans.png";
import Journal from "../assets/images/journal.png";
import Jon from "../assets/images/jon.PNG";

const PortfolioPage = (props) => {
  return (
    <div id="portfolioPage" style={{ backgroundColor: "white", padding: "3%" }}>
      <div
        style={{
          color: "black",
          margin: "5%",
          marginBottom: "10%",
          fontFamily: "monospace",
          boxShadow: "0px 15px 70px -7px gray",
          borderRadius: "20px",
        }}
      >
        <HomeText title={props.title} />
        <Container>
          <div
            style={{
              color: "black",
              backgroundColor: "white",
              margin: "5%",
              padding: "10%",
              marginBottom: "15%",
              fontFamily: "monospace",
              boxShadow: "10px 20px",
              border: "1px solid black",
              borderRadius: "20px",
              fontSize: "35px",
            }}
          >
            portfolio page
          </div>
        </Container>
        <div>
          <CardDeck>
            <Card >
              <a   href="https://eloquent-benz-ba9740.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  >
              <Card.Img variant="top" src={ReadByHumans} alt="Read By Humans"  />

              </a>
              <Card.Body style={{padding:"4%"}}>
                <Card.Title>Read By Humans</Card.Title>
                <Card.Text>
                  Created a site to search for any book from Google book API.
                  Built with react and google API, used bootstrap and common css
                  for styling. Used npm smooth scroll for one continous page.
                  Used Axios for my fetch calls as well.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <a  href="https://fake-fun.web.app"
                  target="_blank"
                  rel="noreferrer">
              <Card.Img variant="top" src={Google} alt="google app" />

              </a>
              <Card.Body style={{padding:"4%"}}>
                <Card.Title>Google app</Card.Title>
                <Card.Text>
                  Created a fake google a replica of google to test my skill of
                  react and firebase learning. You can search using the google
                  api and has clickable links. The frontend is built with React,
                  and the backend is built with Firebase. Built this project to
                  understand more about React, redux, css and to learn Firebase
                  software.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card >
              <a href="https://tinder-clone-9d53e.web.app/"
                  target="_blank"
                  rel="noreferrer">

              <Card.Img variant="top" src={President} alt="tinder clone app"  />
              </a>
              <Card.Body style={{padding:"4%"}}>
                <Card.Title>president Tinder</Card.Title>
                <Card.Text>
                  Pres-inder is an application for people to vote but through
                  tinder like swipe motion. Most of my app are surrounded around
                  COVID times, to help the people stay safe and add value to the
                  community of politics. You can message in between user's and
                  swipe through your favorite presidents. The frontend is built
                  with React, and the backend is built with Firebase. Built this
                  project to practice/understand more about React, Material-ui
                  and to learn Firebase software.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card >
              <a href="https://zen-hopper-ce8178.netlify.app"
                  target="_blank"
                  rel="noreferrer">

              <Card.Img variant="top" src={Robot} alt="robotmaker app"  style={{height:"5vw"}}/>
              </a>
              <Card.Body style={{padding:"4%"}}>
                <Card.Title>Robot Maker</Card.Title>
                <Card.Text>
                  Robot Maker is an application for kids, particularly in COVID
                  times, to build robots and parts. Users can create robots and
                  view robots. I also built this to remind myself not to take it
                  to serious and have fun with what i build. The frontend is
                  built with React/Redux, and the backend is built with a Rails
                  API. I used this project as an opportunity to practice with
                  understanding React and Redux, maintaining page context
                  through react-router-dom, and managing the flow of data
                  between a decoupled frontend and backend.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card >
              <a  href="https://github.com/jonbleibdrey/rails_food_truck_review"
                  target="_blank"
                  rel="noreferrer">

              <Card.Img variant="top" src={FoodTruck} alt="foodtruck app" style={{height:"5vw"}} />
              </a>
              <Card.Body style={{padding:"4%"}}>
                <Card.Title>Food Truck</Card.Title>
                <Card.Text>
                  Food Truck Review is my Rails portfolio project for the
                  Flatiron coding bootcamp. It is an application for users to
                  view, add, and reviewing food trucks. In this project, I tried
                  Test Driven Development for the first time, implemented
                  dynamic SQL searching capability, and integrated GitHub oauth.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card >
              <a     href="https://github.com/jonbleibdrey/the_spiritual_thought"
                  target="_blank"
                  rel="noreferrer">

              <Card.Img variant="top" src={Journal} alt="journal app" style={{height:"5vw"}} />
              </a>
              <Card.Body style={{padding:"4%"}}>
                <Card.Title>The Spiritual Thought</Card.Title>
                <Card.Text>
                  This was my second portfolio project for the Flatiron software
                  engineering program. It's meant to demonstrate my competence
                  with the Sinatra web framework. I built a journal application
                  for managing users journals and if you wanted to share with
                  other people you could do that also.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card >
              <a href="https://github.com/jonbleibdrey"
                  target="_blank"
                  rel="noreferrer">

              <Card.Img variant="top" src={Jon} alt="Me" style={{height:"5vw"}} />
              </a>
              <Card.Body style={{padding:"4%"}}>
                <Card.Title>Check out my github</Card.Title>
                <Card.Text>
                  This was my second portfolio project for the Flatiron software
                  engineering program. It's meant to demonstrate my competence
                  with the Sinatra web framework. I built a journal application
                  for managing users journals and if you wanted to share with
                  other people you could do that also.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
