import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
// Route,
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

import Footer from './components/Footer'


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
        title: 'Let\'s Chat',
        
      }
    }
  }

  render() {
    return (
    <Router>
      <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
         <NavbarBrand>Jonathan Robert Bleibdrey</NavbarBrand>

         <NavbarToggle className="border-0" aria-controls="navbar-toggle" />
          <NavbarCollapse id="navbar-toggle" >
            <Nav className="ml-auto">
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/about">About</Link>
              <Link className='nav-link' to="/contact">Contact</Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>
        <Footer/>

      </Container>
    </Router>
    );
  }
}

export default App;
