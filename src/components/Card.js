import React from "react";
import CardInfo from "../components/CardInfo";

function Card({item, id, title, subTitle,imgSrc,link,selected}) {
  return (
    <div
      className="d-inline-block card__div"
    >
      <img
        className="card__img"
        src={imgSrc}
        alt={imgSrc}
      />
      {selected && (
        <CardInfo
          title={title}
          subTitle={subTitle}
          link={link}
        />
      )}
    </div>
  );
}

export default Card;
