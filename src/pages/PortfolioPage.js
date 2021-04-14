import React from "react";
import { Container, CardDeck, Row, Col } from "react-bootstrap";
import PortfolioCard from "../components/PortfolioCard";
import PortfolioCard2 from "../components/PortfolioCard2";
import "../css/portfolio.css";

const PortfolioPage = (props) => {
  return (
    <div id="portfolioPage" className="portfolio__completeDiv">
      <div className="portfolio__div">
        <Container className="portfolio__container">
          <div className="portfolio__header">Portfolio</div>
        </Container>
        <Container>
          <CardDeck>
            <Row>
              <Col xs={12} lg={6}>
                <PortfolioCard />
              </Col>
              <Col xs={12} lg={6}>
                <PortfolioCard2 />
              </Col>
            </Row>
          </CardDeck>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioPage;
