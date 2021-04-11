import React from "react";
import Content from "../components/Content";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AboutPage(props) {
  return (
    <div id="aboutPage" style={{ padding: "2%" }}>
      <div
        style={{
          color: "black",
          margin: "5%",
          marginBottom: "9%",
          fontFamily: "monospace",
          boxShadow: "-30px 40px 10px 40px #ccc",
          borderRadius: "55px",
          marginTop: "-1%",
          backgroundColor: "white",
        }}
      >
        <Content>
          <div
            style={{
              color: "black",
              backgroundColor: "white",
              margin: "5%",
              padding: "10%",
              marginBottom: "10%",
              fontFamily: "monospace",
              boxShadow: "-10px 17px 20px 15px #ccc",
              borderRadius: "20px",
              fontSize: "40px",
            }}
          >
            About
          </div>
        </Content>

        <Container>
          <Row>
            <Col xs={6}>
              <div style={{ marginBottom: "10%" }}>
                <h3>
                  Hello, my name is Jonathan. I'm a full stack engineer with
                  experience in Javascript, React, Ruby, and Rails.
                </h3>
                <br />

                <h3>
                  My dream is to show people that we are naturally left and
                  right brain, that we have the capability to be smart and
                  creative.{" "}
                </h3>
                <br />
                <h3>
                  I'm constantly learning new things, enjoying the process and
                  keeping up with new tech. Currently I'm gaining more experience
                  with Javascript, React and Firebase.
                </h3>
                <br />
                <h3>
                  My last couple of projects were based on the economics of
                  where I think the world is going during the Covid-19 period.
                  You can find my code
                  <a
                    style={{ color: "black" }}
                    href="https://github.com/jonbleibdrey"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    here
                  </a>
                  .
                </h3>
                <br />
                <h3>
                  When I'm not learning something new, chances are I'm creating
                  some type of art, shooting archery, and I also dabble in
                  photography. Which you can find{" "}
                  <a
                    style={{ color: "black" }}
                    href="https://www.instagram.com/johnnyb.experience/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    here.
                  </a>
                </h3>
              </div>
            </Col>
            <Col xs={6}>
              <ul
                style={{
                  color: "black",
                  backgroundColor: "white",
                  margin: "5%",
                  padding: "10%",
                  marginBottom: "10%",
                  fontFamily: "monospace",
                  boxShadow: "-10px 17px 20px 15px #ccc",
                  borderRadius: "20px",
                  fontSize: "40px",
                }}
              >
                <div>
                  <h1>Languages</h1>
                </div>
                <li style={{ margin: "4%", padding: "2%" }}>
                  <img
                    align="center"
                    alt="JavaScript"
                    style={{ margin: "4%" }}
                    width="50px"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  />
                  <img
                    align="center"
                    alt="React"
                    width="50px"
                    style={{ margin: "4%" }}
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  />
                  <img
                    align="center"
                    alt="Ruby"
                    width="50px"
                    style={{ margin: "4%" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png"
                  />
                  <img
                    align="center"
                    alt="Ruby on Rails"
                    width="50px"
                    style={{ margin: "4%" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png"
                  />
                </li>
              </ul>
              <ul
                style={{
                  color: "black",
                  backgroundColor: "white",
                  margin: "5%",
                  padding: "10%",
                  marginBottom: "10%",
                  fontFamily: "monospace",
                  boxShadow: "-10px 17px 20px 15px #ccc",
                  borderRadius: "20px",
                  fontSize: "40px",
                }}
              >
                <div>
                  <h1>Style</h1>
                </div>
                <li style={{ margin: "5%", padding: "2%" }}>
                  <img
                    align="center"
                    alt="HTML5"
                    width="50px"
                    style={{ margin: "4%" }}
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                  />
                  <img
                    align="center"
                    alt="CSS3"
                    width="50px"
                    style={{ margin: "4%" }}
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                  />
                  <img
                    align="center"
                    alt="Visual Studio Code"
                    width="50px"
                    style={{ margin: "4%" }}
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
                  />
                  <img
                    align="center"
                    alt="bootstap"
                    width="50px"
                    style={{ margin: "4%" }}
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
                  />
                </li>
              </ul>
              <ul
                style={{
                  color: "black",
                  backgroundColor: "white",
                  margin: "5%",
                  padding: "10%",
                  marginBottom: "10%",
                  fontFamily: "monospace",
                  boxShadow: "-10px 17px 20px 15px #ccc",
                  borderRadius: "20px",
                  fontSize: "40px",
                }}
              >
                <div>
                  <h1>Others</h1>
                </div>
                <li style={{ margin: "5%", padding: "2%" }}>
                  {" "}
                  <img
                    align="center"
                    alt="SQL"
                    width="50px"
                    style={{ margin: "4%" }}
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"
                  />
                  <img
                    align="center"
                    alt="firebase"
                    width="50px"
                    style={{ margin: "4%" }}
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                  />
                  <img
                    align="center"
                    alt="GitHub"
                    width="50px"
                    style={{ margin: "4%" }}
                    src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
                  />
                  <img
                    align="center"
                    alt="Redux"
                    width="50px"
                    style={{ margin: "4%" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                  />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutPage;
