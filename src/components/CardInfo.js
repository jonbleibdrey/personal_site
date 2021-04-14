import React from "react";
import { useSpring, animated } from "react-spring";
import "../css/card.css";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="card__info" style={style}>
      <p className="card__title">{props.title}</p>
      <p className="card__subTitle">{props.subTitle}</p>
      <a
        className="card__aTag"
        href={props.link}
        target="blank"
        rel="noopener noreferrer"
      >
        view
      </a>
    </animated.div>
  );
}

export default CardInfo;
