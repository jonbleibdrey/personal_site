import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import Routers from "./components/Routers";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import NavBar from "./components/NavBar";
import "../src/css/App.css";

const App = () => {
  const [mainInfo, setMainInfo] = useState({
    info: {
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
    },
  });

  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <div className="app__div">
          <NavBar />
          <Switch>
            <Routers
              homeTitle={mainInfo.info.home.title}
              homeSubTitle={mainInfo.info.home.subTitle}
              homeText={mainInfo.info.home.text}
              aboutTitle={mainInfo.info.about.title}
              contactTitle={mainInfo.info.contact.title}
              portTitle={mainInfo.info.portfolio.title}
            />
          </Switch>
          <AboutPage name="aboutPage" />
          <PortfolioPage name="portfolioPage" />
          <ContactPage name="contactPage" />
          <Footer />
        </div>
      </Container>
    </Router>
  );
};

export default App;
