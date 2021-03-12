import React from "react";

export const Album = (props) => {
  const len = props.artists.length;

  return (
    <div className="album-card">
      <div className="album-cover">
        <img className="album-image" src={props.image} alt="Album cover" />

        <div className="icons">
          <img
            className="heart"
            src={require("../images/heart.svg")}
            alt="favorite icon"
          />
          <a href={props.albumURL}>
            <img
              className="play"
              src={require("../images/play.svg")}
              alt="play icon"
            />
          </a>

          <img
            className="dots"
            src={require("../images/dots.svg")}
            alt="menu icon"
          />
        </div>
      </div>
      <a href={props.albumURL}>
        <p className="album-title"> {props.name} </p>
      </a>

      {props.artists.map((artist, index) => {
        if (len !== index + 1) {
          return (
            <a key={artist.id} href={artist.external_urls.spotify}>
              <span className="album-artist">{artist.name}, </span>
            </a>
          );
        }
        return (
          <a key={artist.id} href={artist.external_urls.spotify}>
            <span className="album-artist">{artist.name} </span>
          </a>
        );
      })}
    </div>
  );
};

export default Album;
