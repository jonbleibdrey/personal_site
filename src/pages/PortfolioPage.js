import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import PortfolioCard from "../components/PortfolioCard";
import "../css/portfolio.css";

const PortfolioPage = () => {
  return (
    <div id="portfolioPage" className="portfolio__completeDiv">
      <div className="portfolio__div">
        <Container className="portfolio__container">
          <div className="portfolio__header">Portfolio</div>
        </Container>
        <Container>
          <CardDeck>
            <PortfolioCard />
          </CardDeck>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioPage;
