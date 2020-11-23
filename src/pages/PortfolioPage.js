import React from 'react'
import HomeText from '../components/HomeText'
import Content from '../components/Content'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Foodtruck from "../assets/images/foodtruck.png";
import Robot from "../assets/images/robot.png";
import President from "../assets/images/president.png";
import Journal from "../assets/images/journal.png";

const PortfolioPage = (props) => {
    return (
        <div>
            <HomeText title={props.title}/>
            <Row className="justify-content-center py-1">
            <Col xs="9">
            <Content>
                <Container>
                <ol>
                <li>
                <p>
                Pres-inder is an application for people to vote but through tinder like swipe motion. Most of my app are surrounded around COVID times, to help the people stay safe and add value to the community of politics. 
                You can message in between user's and swipe through your favorite presidents. 
                The frontend is built with React, and the backend is built with Firebase. 
                Built this project to practice/understand more about React, Material-ui and to learn Firebase software.
                <br/>
                <a href="https://tinder-clone-9d53e.web.app/"> <img className="g-card-image"  src={President} alt='tinder clone app'/> </a>
                </p>
                </li>
                <br/>
                <li>
                <p>
                Robot Maker is an application for kids, particularly in COVID times, to build robots and parts. 
                Users can create robots and view robots. 
                The frontend is built with React/Redux, and the backend is built with a Rails API. 
                I used this project as an opportunity to practice with understanding React and Redux, maintaining page context through react-router-dom, and managing the flow of data between a decoupled frontend and backend.
                <br/>
                <a href="https://github.com/jonbleibdrey/robot_maker"> <img className="g-card-image"  src={Robot} alt='robotmaker app'/> </a>
                </p>
                </li>
                <br/>
                <li>
                <p>
                Food Truck Review is my Rails portfolio project for the Flatiron coding bootcamp. 
                It is an application for users to view, add, and reviewing food trucks.
                In this project, I tried Test Driven Development for the first time, implemented dynamic SQL searching capability, and integrated GitHub oauth.
                <br/>
                <a href="https://github.com/jonbleibdrey/rails_food_truck_review"> <img className="g-card-image"  src={Foodtruck} alt='foodtruck app'/> </a>
                </p>
                </li>
                <br/>
                <li>
                
                <p>
                This was my second portfolio project for the Flatiron software engineering program. 
                It's meant to demonstrate my competence with the Sinatra web framework. 
                I built a journal application for managing users journals and if you wanted to share with other people you could do that also.
                <br/>
                <a href="https://github.com/jonbleibdrey/the_spiritual_thought"> <img className="g-card-image" src={Journal} alt='journal app'/> </a>
                </p>
                </li>
                <br/>
                <br/>
                <p>
                    Check out more work on my github<a href="https://github.com/jonbleibdrey"> here. </a>
                </p>
                </ol>
                </Container>
            </Content>
            </Col>
            </Row>
        </div>
    )
}

export default PortfolioPage
