import React from "react";
import { Card, Container, CardDeck, Row, Col } from "react-bootstrap";

import FoodTruck from "../assets/images/foodtruck.png";
import Robot from "../assets/images/robot.png";
import President from "../assets/images/president.png";
import Google from "../assets/images/google.png";
import ReadByHumans from "../assets/images/readByHumans.png";
import Journal from "../assets/images/journal.png";
import Jon from "../assets/images/jon.PNG";

const PortfolioPage = (props) => {
  return (
    <div id="portfolioPage" style={{ backgroundColor: "#f4f0f7", padding: "3%" }}>
      <div
        style={{
          color: "black",
          margin: "5%",
          marginBottom: "10%",
          marginTop: "-5%",
          fontFamily: "monospace",
          boxShadow: "-27px 31px 35px 29px #ccc",
          borderRadius: "45px",
          backgroundColor: "white",
        }}
      >
        <Container style={{ padding: "3%" }}>
          <div
            style={{
              color: "black",
              backgroundColor: "white",
              margin: "5%",
              padding: "10%",
              marginBottom: "5%",
              fontFamily: "monospace",
              boxShadow: "-27px 31px 35px 29px #ccc",
              borderRadius: "45px",
              fontSize: "40px",
            }}
          >
            Portfolio
          </div>
        </Container>
        <Container>
          <CardDeck>
            <Row>
              <Col xs={6}>
                <Card
                  style={{
                    margin: "1%",
                    marginBottom: "10%",
                    boxShadow: "-10px 12px 20px 13px #ccc",
                    borderRadius: "15px",
                  }}
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
                    />
                  </a>
                  <Card.Body style={{ padding: "4%" }}>
                    <Card.Title>Read By Humans</Card.Title>
                    <Card.Text>
                      Created a site to search for any book from Google book
                      API. Built with react and google API, used bootstrap and
                      common css for styling. Used npm smooth scroll for one
                      continous page. Used Axios for my fetch calls as well.
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
                >
                  <a
                    href="https://fake-fun.web.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card.Img
                      variant="top"
                      src={Google}
                      alt="google app"
                      style={{
                        maxHeight: "400px",
                        minHeight: "200px",
                        borderRadius: "15px",
                      }}
                    />
                  </a>
                  <Card.Body style={{ padding: "4%" }}>
                    <Card.Title>Google app</Card.Title>
                    <Card.Text>
                      Created a fake google a replica of google to test my skill
                      of react and firebase learning. You can search using the
                      google api and has clickable links. The frontend is built
                      with React, and the backend is built with Firebase. Built
                      this project to understand more about React, redux, css
                      and to learn Firebase software.
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
                    />
                  </a>
                  <Card.Body style={{ padding: "4%" }}>
                    <Card.Title>president Tinder</Card.Title>
                    <Card.Text>
                      Pres-inder is an application for people to vote but,
                      through tinder like swipe motion. You can message in
                      between user's and swipe through your favorite presidents.
                      The frontend is built with React, and the backend is built
                      with Firebase.
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
                    />
                  </a>
                  <Card.Body style={{ padding: "4%" }}>
                    <Card.Title>Robot Maker</Card.Title>
                    <Card.Text>
                      Robot Maker is an application for kids, playful site, to
                      build robots and parts. Users can create robots and view
                      robots. The frontend is built with React/Redux, and the
                      backend is built with a Rails API. It helped me maintain
                      page context through react-router-dom, and managing the
                      flow of data between a decoupled frontend and backend.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card
                  style={{
                    margin: "1%",
                    marginBottom: "10%",
                    boxShadow: "-10px 12px 20px 13px #ccc",
                    borderRadius: "15px",
                  }}
                >
                  <a
                    href="https://github.com/jonbleibdrey/rails_food_truck_review"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card.Img
                      variant="top"
                      src={FoodTruck}
                      alt="foodtruck app"
                      style={{
                        maxHeight: "400px",
                        minHeight: "200px",
                        borderRadius: "15px",
                      }}
                    />
                  </a>
                  <Card.Body style={{ padding: "4%" }}>
                    <Card.Title>Food Truck</Card.Title>
                    <Card.Text>
                      Food Truck Review is my Rails portfolio project for the
                      Flatiron coding bootcamp. It is an application for users
                      to view, add, and reviewing food trucks. In this project,
                      I tried Test Driven Development for the first time,
                      implemented dynamic SQL searching capability, and
                      integrated GitHub oauth.
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
                >
                  <a
                    href="https://github.com/jonbleibdrey/the_spiritual_thought"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card.Img
                      variant="top"
                      src={Journal}
                      alt="journal app"
                      style={{
                        maxHeight: "400px",
                        minHeight: "200px",
                        borderRadius: "15px",
                      }}
                    />
                  </a>
                  <Card.Body style={{ padding: "4%" }}>
                    <Card.Title>The Spiritual Thought</Card.Title>
                    <Card.Text>
                      This was my second portfolio project EVER, we all have to
                      start somewhere. It's meant to demonstrate my competence
                      with the Sinatra web framework. I built a journal
                      application for managing users journals and if you wanted
                      to share with other people you could do that also.
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
                >
                  <a
                    href="https://github.com/jonbleibdrey"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card.Img
                      variant="top"
                      src={Jon}
                      alt="Me"
                      style={{
                        maxHeight: "400px",
                        minHeight: "200px",
                        borderRadius: "15px",
                      }}
                    />
                  </a>
                  <Card.Body style={{ padding: "4%" }}>
                    <Card.Title>Check out my github</Card.Title>
                    <Card.Text>
                      As i grow I remember to enjoy the journey as much as the
                      outcome. I keep building to show people you can be
                      creative and smart. During the time of reading this I
                      might not have the best sites but thats not the point, the
                      point was i enjoyed myself whiling doing it.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardDeck>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioPage;
