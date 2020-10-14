import React from "react";
import CardOptions from "./CardOptions";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <img src={props.images[0].url} alt="album cover" />
        </div>
        <a href={props.external_urls.spotify} target="_blank">
          <h1 className="card__title">{props.name}</h1>
        </a>
        <a href={props.artists[0].external_urls.spotify} target="_blank">
          <p className="card__info">{props.artists[0].name}</p>
        </a>
        <CardOptions />
      </div>
    </>
  );
};

export default Card;
