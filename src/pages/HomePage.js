import React from 'react'
import HomeText from '../components/HomeText'
import Carousel from '../components/Carousel'

function HomePage(props) {
    return (
        <div>
        <HomeText title={props.title} subTitle={props.subTitle} text={props.text}/>  

        <Carousel/>

        </div>
    )
}

export default HomePage
