import React from "react";

function Card({ item, id, title, subTitle, imgSrc, link, selected }) {
  return (
    <div className="d-inline-block card__div" style={{marginLeft:"14rem"}}>
      <a href={link} target="_blank" rel="noreferrer">
        <img className="card__img" src={imgSrc} alt={imgSrc} />
      </a>
    </div>
  );
}

export default Card;
