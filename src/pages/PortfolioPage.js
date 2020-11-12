import React from 'react'
import HomeText from '../components/HomeText'
import Content from '../components/Content'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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
                Robot Maker is an application for kids, particularly in COVID times, to build robots and parts. 
                Users can create robots and view robots. 
                The frontend is built with React/Redux, and the backend is built with a Rails API. 
                I used this project as an opportunity to practice with understanding React and Redux, maintaining page context through react-router-dom, and managing the flow of data between a decoupled frontend and backend.
                <br/>
                <a href="https://github.com/jonbleibdrey/robot_maker"> check it out here. </a>
                </p>
                </li>
               
                <li>
                <p>
                    hello hello 
                </p>
                </li>

                <li>
                <p>
                    hello hello 
                </p>
                </li>
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
