import React from "react";
import "./album.css";
import "./icons.css";

export const Album = props => {
  return (
    <section className="album-card">
      <section className="album-cover">
        <img className="album-img" src={props.image} alt="Album" />
        <section className="icons">
          <img className="icon-heart" src="icons/heart.svg" alt="Heart" />
          <img className="icon-play" src="icons/play.svg" alt="Play" />
          <img className="icon-dots" src="icons/dots.svg" alt="Dots" />
        </section>
      </section>

      <section className="album-title">
        <a href={props.albumURL}>{props.albumTitle}</a>
      </section>

      <section className="artist-name">
        <a href={props.artistsURL}>{props.artists}</a>
      </section>
    </section>
  );
};
