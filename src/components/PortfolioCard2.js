import React from "react";
import { Card } from "react-bootstrap";
import FoodTruck from "../assets/images/foodtruck.png";
import Journal from "../assets/images/journal.png";
import Jon from "../assets/images/jon.PNG";

const PortfolioCard2 = () => {
  return (
    <div>
      <Card
        style={{
          margin: "1%",
          marginBottom: "10%",
          boxShadow: "-10px 12px 20px 13px #ccc",
          borderRadius: "15px",
        }}
        //   could not style with css
      >
        <a
          href="https://github.com/jonbleibdrey/rails_food_truck_review"
          target="_blank"
          rel="noreferrer"
        >
          <Card.Img
            variant="top"
            src={FoodTruck}
            alt="foodtruck app"
            style={{
              maxHeight: "400px",
              minHeight: "200px",
              borderRadius: "15px",
            }}
            //   could not style with css
          />
        </a>
        <Card.Body className="portfolio__cardBody">
          <Card.Title>Food Truck</Card.Title>
          <Card.Text>
            Food Truck Review is my Rails portfolio project for the Flatiron
            coding bootcamp. It is an application for users to view, add, and
            reviewing food trucks. In this project, I tried Test Driven
            Development for the first time, implemented dynamic SQL searching
            capability, and integrated GitHub oauth.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          margin: "1%",
          marginBottom: "10%",
          boxShadow: "-10px 12px 20px 13px #ccc",
          borderRadius: "15px",
        }}
        //   could not style with css
      >
        <a
          href="https://github.com/jonbleibdrey/the_spiritual_thought"
          target="_blank"
          rel="noreferrer"
        >
          <Card.Img
            variant="top"
            src={Journal}
            alt="journal app"
            style={{
              maxHeight: "400px",
              minHeight: "200px",
              borderRadius: "15px",
            }}
            //   could not style with css
          />
        </a>
        <Card.Body className="portfolio__cardBody">
          <Card.Title>The Spiritual Thought</Card.Title>
          <Card.Text>
            This was my second portfolio project EVER, we all have to start
            somewhere. It's meant to demonstrate my competence with the Sinatra
            web framework. I built a journal application for managing users
            journals and if you wanted to share with other people you could do
            that also.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          margin: "1%",
          marginBottom: "10%",
          boxShadow: "-10px 12px 20px 13px #ccc",
          borderRadius: "15px",
        }}
        //   could not style with css
      >
        <a
          href="https://github.com/jonbleibdrey"
          target="_blank"
          rel="noreferrer"
        >
          <Card.Img
            variant="top"
            src={Jon}
            alt="Me"
            style={{
              maxHeight: "400px",
              minHeight: "200px",
              borderRadius: "15px",
            }}
            //   could not style with css
          />
        </a>
        <Card.Body className="portfolio__cardBody">
          <Card.Title>Check out my github</Card.Title>
          <Card.Text>
            As i grow I remember to enjoy the journey as much as the outcome. I
            keep building to show people you can be creative and smart. During
            the time of reading this I might not have the best sites but thats
            not the point, the point was i enjoyed myself whiling doing it.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PortfolioCard2;
