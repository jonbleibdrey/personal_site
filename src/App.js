import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import { Navbar } from 'react-bootstrap';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      title: "Jonathan Bleibdrey",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Open Your Mind',
        subTitle: 'Projects',
        text:'Checkout my projects below'
      },
      about: {
        title: 'About Me',
      
      },
      contact: {
        title: 'Lets Chat',
        
      }
    }
  }

  render() {
    return (
    <Router>
      <Container className="p-0" fluid={true}>

        <Navbar>
        
        </Navbar>
      <p>Hi from container</p>
      </Container>
    </Router>
    );
  }
}

export default App;
