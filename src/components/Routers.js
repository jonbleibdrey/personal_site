import React from 'react'
import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PortfolioPage from "../pages/PortfolioPage";

const Routers = ({homeTitle, homeSubTitle, homeText, aboutTitle, contactTitle, portTitle}) => {
    return (
        <div>
            <Route
                path="/"
                exact
                render={() => (
                  <HomePage
                    title={homeTitle}
                    subTitle={homeSubTitle}
                    text={homeText}
                  />
                )}
              />
              <Route
                path="/about"
                render={() => <AboutPage title={aboutTitle} />}
              />
              <Route
                path="/contact"
                render={() => <ContactPage title={contactTitle} />}
              />
              <Route
                path="/portfolio"
                render={() => (
                  <PortfolioPage title={portTitle} />
                )}
              />
        </div>
    )
}

export default Routers
