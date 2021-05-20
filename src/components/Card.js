import React from "react";

function Card({ imgSrc, link }) {
  return (
    <div className="card__div">
      <a href={link} target="_blank" className="card__a" rel="noreferrer">
        <img className="card__img" src={imgSrc} alt={imgSrc} />
      </a>
    </div>
  );
}

export default Card;
