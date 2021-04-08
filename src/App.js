import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import NavBar from "./components/NavBar";

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
        title: "Welcome to: The present moment!",
        subTitle: "My name is Jonathan Bleibdrey",
        text: " I make things look simple but, useful. kinda like life.",
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
          <NavBar />

          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}
                />
              )}
            />
            <Route
              path="/about"
              render={() => <AboutPage title={this.state.about.title} />}
            />
            <Route
              path="/contact"
              render={() => <ContactPage title={this.state.contact.title} />}
            />
            <Route
              path="/portfolio"
              render={() => (
                <PortfolioPage title={this.state.portfolio.title} />
              )}
            />
          </Switch>
        </Container>
        <AboutPage name="aboutPage" />
        <PortfolioPage name="portfolioPage " />
        <ContactPage name="contactPage" />
        <Footer />
      </Router>
    );
  }
}

export default App;
