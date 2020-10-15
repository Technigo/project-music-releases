import React from "react";
import CardOptions from "./CardOptions";

const Card = (props) => {
  const artists = () => {
    return props.artists
      .map((item) => {
        return item.name;
      })
      .join(", ")
      .replace(/, ([^,]*)$/, " & $1");
  };

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
        <a
          href={props.artists[0].external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="card__info">{artists()}</p>
        </a>
      </div>
    </div>
  );
};

export default Card;
