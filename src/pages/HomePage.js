import React from 'react'
import HomeText from '../components/HomeText'
import Carousel from '../components/Carousel'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function HomePage(props) {
    return (
        <div>
        <HomeText title={props.title} subTitle={props.subTitle} text={props.text}/>  
        <Row className="justify-content-center py-5">
            <Col xs="7">
                <Carousel/>
            </Col>
        </Row>

        </div>
    )
}

export default HomePage
