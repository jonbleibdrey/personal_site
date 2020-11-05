import React from 'react'
import Hero from '../'
import HomeText from '../components/HomeText'
import Content from '../components/Content'

function AboutPage(props) {
    return (
        <div>
            <HomeText title={props.title}/>
            <Content>
               <p>Hello, my name is Jonathan. I'm a full stack engineer with experience in Ruby, Rails, Javascript, React and Redux.</p>  
              
               <p>My dream is to show people that you are left and right brain, that we have the capability to be smart and creative. </p>  
               
               <p>I'm constantly learning new things. currently those things include gaining more experience with Javascript, React and Redux</p>  
               
               <p>My last couple of projects, where based on the economics of where I think the world is going during the Covid-19 times. You can find them<a href="https://github.com/jonbleibdrey"> here. </a></p>  
               
               <p>When I'm not learning something new chances are I'm creating some type of art. Which you can find or here </p>  
            </Content>
        </div>
    )
}

export default AboutPage
