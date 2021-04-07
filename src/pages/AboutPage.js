import React from 'react'
import HomeText from '../components/HomeText'
import Content from '../components/Content'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { MdContactMail } from 'react-icons/md'

function AboutPage(props) {
    return (
        <div id="aboutPage" style={{backgroundColor:"white", padding:"3%"}}>
            <div style={{
              color: "black",
              backgroundColor:"blue",
              margin: "5%",
              marginBottom: "10%",
              fontFamily: "monospace",
              boxShadow: "0px 15px 70px -7px gray",
              borderRadius: "20px",
        }}>
            <HomeText title={props.title}/>
            <Row className="justify-content-center py-5">
            <Col xs="9">
                <Content>
                    <Container>
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
        }}>AboutPage</div>
                        
                        <p>Hello, my name is Jonathan. I'm a full stack engineer with experience in Ruby, Rails, Javascript, React and Redux.</p>  
              
                        <p>My dream is to show people that we are naturally left and right brain, that we have the capability to be smart and creative. </p>  
               
                        <p>I'm constantly learning new things. currently those things include gaining more experience with Javascript, React and Redux</p>  
               
                        <p>My last couple of projects, where based on the economics of where I think the world is going, during the Covid-19 period. You can find them<a style={{display: "table-cell"}} href="https://github.com/jonbleibdrey" target="_blank" rel="noreferrer"> here. </a></p>  
               
                        <p>When I'm not learning something new chances are I'm creating some type of art. Which you can find photography <a style={{display: "table-cell"}} href="https://www.instagram.com/johnnyb.experience/" target="_blank" rel="noreferrer"> here. </a> or drawings <a style={{display: "table-cell"}} href="https://www.instagram.com/johnnyb.exploration/" target="_blank" rel="noreferrer"> here. </a> </p>  
                    </Container>
               </Content>
            </Col>
            </Row>
            </div>
        </div>
    )
}

export default AboutPage
