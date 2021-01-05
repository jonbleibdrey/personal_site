import React from 'react'
import HomeText from '../components/HomeText'
import Content from '../components/Content'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function AboutPage(props) {
    return (
        <div>
            <HomeText title={props.title}/>
            <Row className="justify-content-center py-5">
            <Col xs="9">
                <Content>
                    <Container>
                        
                        <p>Hello, my name is Jonathan. I'm a full stack engineer with experience in Ruby, Rails, Javascript, React and Redux.</p>  
              
                        <p>My dream is to show people that we are naturally left and right brain, that we have the capability to be smart and creative. </p>  
               
                        <p>I'm constantly learning new things. currently those things include gaining more experience with Javascript, React and Redux</p>  
               
                        <p>My last couple of projects, where based on the economics of where I think the world is going, during the Covid-19 period. You can find them<a href="https://github.com/jonbleibdrey"> here. </a></p>  
               
                        <p>When I'm not learning something new chances are I'm creating some type of art. Which you can find photography <a href="https://www.instagram.com/johnnyb.experience/"> here. </a> or drawings <a href="https://www.instagram.com/johnnyb.exploration/"> here. </a> </p>  
                    </Container>
               </Content>
            </Col>
            </Row>
        </div>
    )
}

export default AboutPage
