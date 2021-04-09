import React, { Component } from "react";
import linkedin from "../assets/images/linkedin.PNG";
import github from "../assets/images/github.PNG";
import Jon from "../assets/images/jon.PNG";
import Medium from "../assets/images/medium.png";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          link:
            "https://www.linkedin.com/mwlite/in/jonathan-bleibdrey-4032171b9",
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
        {
          id: 3,
          title: "Facebook",
          subTitle: "Social Media.",
          imgSrc: Jon,
          link: "https://www.facebook.com/jbleibdrey/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
