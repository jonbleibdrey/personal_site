import React from 'react'
import './App.css';

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
      <div>
        Hello world!
      </div>
    );
  }
}

export default App;
