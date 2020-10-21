import React from "react";

import CardOptions from "./CardOptions";
import Artists from "./Artists";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__img">
          <img src={props.images[0].url} alt="album cover" />
          <CardOptions />
        </div>
        <a
          href={props.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="card__title">{props.name}</h1>
        </a>
        <p className="card__info">
          <Artists artists={props.artists} />
        </p>
      </div>
    </div>
  );
};

export default Card;
