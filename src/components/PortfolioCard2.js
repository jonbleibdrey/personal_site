import React, { useState } from "react";
import { Card } from "react-bootstrap";
import FoodTruck from "../assets/images/foodtruck.png";
import Journal from "../assets/images/journal.png";
import Todo from "../assets/images/todo.png";
import ReadByHumans from "../assets/images/readByHumans.png";

const PortfolioCard2 = () => {
  const [cardInfo, setCardInfo] = useState({
    info: [
      {
        link: "https://blissful-northcutt-caae64.netlify.app/",
        img: `${Todo}`,
        imgText: "To-do list",
        text: " Created a simple site for a todo list. Built with react, javascript, and common css for styling. wanted to use mostly hooks to make this come alive.",
      },
      {
        link: "https://eloquent-benz-ba9740.netlify.app/",
        img: `${ReadByHumans}`,
        imgText: "Read By Humans",
        text: " Created a site to search for any book from Google book API. Built with react and google API, used bootstrap and common css for styling. Used npm smooth scroll for one continous page. Used Axios for my fetch calls as well.",
      },
      {
        link: "https://github.com/jonbleibdrey/rails_food_truck_review",
        img: `${FoodTruck}`,
        imgText: "FoodTruck app",
        text: " Food Truck Review is my Rails portfolio project for the Flatiron coding bootcamp. It is an application for users to view, add, and reviewing food trucks. In this project, I tried Test Driven Development for the first time, implemented dynamic SQL searching capability, and integrated GitHub oauth.",
      },
      {
        link: "https://github.com/jonbleibdrey/the_spiritual_thought",
        img: `${Journal}`,
        imgText: "Spiritual Thought",
        text: "This was my second portfolio project EVER, we all have to start somewhere. It's meant to demonstrate my competence with the Sinatra web framework. I built a journal application for managing users journals and if you wanted to share with other people you could do that also.",
      },
    ],
  });

  console.log(setCardInfo)

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {cardInfo.info.map((info) => (
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
          <a href={info.link} target="_blank" rel="noreferrer">
            <Card.Img
              variant="top"
              src={info.img}
              alt={info.imgText}
              style={{
                maxHeight: "400px",
                minHeight: "200px",
                borderRadius: "15px",
              }}
              //   could not style with css
            />
          </a>
          <Card.Body className="portfolio__cardBody">
            <Card.Title>{info.imgText}</Card.Title>
            <Card.Text>{info.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PortfolioCard2;
