import React, { useState } from "react";
import linkedin from "../assets/images/linkedin.PNG";
import github from "../assets/images/github.PNG";
import Medium from "../assets/images/medium.png";
import Card from "./Card";
import "../css/card.css";

const Clickable = () => {
  const [links, setLinks] = useState({
    items: [
      {
        id: 0,
        title: "Github",
        subTitle: "Code.",
        imgSrc: github,
        link: "https://github.com/jonbleibdrey",
        selected: false,
      },
      {
        id: 1,
        title: "Linked in",
        subTitle: "Credentials.",
        imgSrc: linkedin,
        link: "https://www.linkedin.com/mwlite/in/jonathan-bleibdrey-4032171b9",
        selected: false,
      },
      {
        id: 2,
        title: "Medium",
        subTitle: "My Blog.",
        imgSrc: Medium,
        link: "https://jonbleibdrey.medium.com/",
        selected: false,
      },
    ],
  });

  console.log(setLinks)

  return (
    <div className="click__div">
      {links.items.map((e) => (
        <Card imgSrc={e.imgSrc} link={e.link} />
      ))}
    </div>
  );
};

export default Clickable;
