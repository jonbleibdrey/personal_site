import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import Routers from "./components/Routers";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import NavBar from "./components/NavBar";
import "../src/css/App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Jonathan Bleibdrey",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Portfolio", path: "/portfolio" },
      ],
      home: {
        title: "Minimalist, Web Design.",
        subTitle: "Name: Jonathan Bleibdrey",
        text: " I like simplicity because it's simple, useful, and gets to the point.",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Chat",
      },
      portfolio: {
        title: "Check out my projects.",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <div className="app__div">
            <NavBar />
            <Switch>
              <Routers
                homeTitle={this.state.home.title}
                homeSubTitle={this.state.home.subTitle}
                homeText={this.state.home.text}
                aboutTitle={this.state.about.title}
                contactTitle={this.state.contact.title}
                portTitle={this.state.portfolio.title}
              />
            </Switch>
            <AboutPage name="aboutPage" />
            <PortfolioPage name="portfolioPage"/>
            <ContactPage name="contactPage" />
            <Footer />
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
