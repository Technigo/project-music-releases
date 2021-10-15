import React from "react";
import Icons from "./Icons";
import Artists from "./Artists";

const Album = (props) => {
  return (
    <article className="album-card">
      <div className="image-container">
        <Icons />
        <img src={props.item.images[0].url} alt="album cover" />
      </div>
      <div className="text-wrapper">
        <h2 className="song-title">
          <a
            href={props.item.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.item.name}
          </a>
        </h2>
        <h3 className="song-artists">
          <a
            href={props.item.artists[0].external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Artists artistArray={props.item.artists} />
          </a>
        </h3>
      </div>
    </article>
  );
};

export default Album;
