import React from "react";
import { Overlay } from "components/Overlay";

export const Albumcard = (props) => {
  return (
    <section>
      <article className="album-container">
        <div className="cover-container">
          <div className="overlay-container">
            <Overlay />
          </div>
          <div className="image-container">
            <img alt={props.name} className="song-img" src={props.image} />
          </div>
        </div>
        <h2 className="album-name">{props.name}</h2>
        <h3 className="artist">{props.artist}</h3>
      </article>
    </section>
  );
};
