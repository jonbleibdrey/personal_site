import React from "react";
import { Card } from "react-bootstrap";
import FoodTruck from "../assets/images/foodtruck.png";
import Journal from "../assets/images/journal.png";
import Todo from "../assets/images/todo.png";
import ReadByHumans from "../assets/images/readByHumans.png";

const PortfolioCard2 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Card
        className="portfolio__card"
        style={{
          margin: "1%",
          marginBottom: "10%",
          paddingBottom: "5%",
          boxShadow: "-10px 12px 20px 13px #ccc",
          borderRadius: "15px",
        }}
        //   could not style with css
      >
        <a
          href="https://blissful-northcutt-caae64.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Card.Img
            variant="top"
            src={Todo}
            alt="Read By Humans"
            style={{
              maxHeight: "400px",
              minHeight: "200px",
              borderRadius: "15px",
            }}
            //   could not style with css
          />
        </a>
        <Card.Body className="portfolio__cardBody">
          <Card.Title>Read By Humans</Card.Title>
          <Card.Text>
            Created a simple site for a todo list. Built with react, javascript,
            and common css for styling. wanted to use mostly hooks to make this
            come alive.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        className="portfolio__card"
        style={{
          margin: "1%",
          marginBottom: "10%",
          paddingBottom: "5%",
          boxShadow: "-10px 12px 20px 13px #ccc",
          borderRadius: "15px",
        }}
        //   could not style with css
      >
        <a
          href="https://eloquent-benz-ba9740.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Card.Img
            variant="top"
            src={ReadByHumans}
            alt="Read By Humans"
            style={{
              maxHeight: "400px",
              minHeight: "200px",
              borderRadius: "15px",
            }}
            //   could not style with css
          />
        </a>
        <Card.Body className="portfolio__cardBody">
          <Card.Title>Read By Humans</Card.Title>
          <Card.Text>
            Created a site to search for any book from Google book API. Built
            with react and google API, used bootstrap and common css for
            styling. Used npm smooth scroll for one continous page. Used Axios
            for my fetch calls as well.
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
    </div>
  );
};

export default PortfolioCard2;
