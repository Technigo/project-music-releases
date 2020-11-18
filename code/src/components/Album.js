import React from "react";

import { Artist } from "./Artist";
import { Icon } from "./Icon";
import "./album.css";

export const Album = (props) => {
  return (
    <section className="wrapper">
      <article className="album">
        <div className="image-container">
          <img
            src={props.album.images[1].url}
            className="cover-img"
            alt={props.album.name}
          />
          <div className="icon-container">
            <Icon icon="./icons/heart.svg" />
            <a href={props.album.external_urls.spotify} className="play-icon">
              <Icon icon="./icons/play.svg" />
            </a>
            <Icon icon="./icons/dots.svg" />
          </div>
        </div>

        <a href={props.album.external_urls.spotify}>
          <h2>{props.album.name}</h2>
        </a>

        <h3>
          {props.album.artists.map((item) => {
            return (
              <Artist
                key={item.id}
                name={item.name}
                url={item.external_urls.spotify}
              />
            );
          })}
        </h3>
      </article>
    </section>
  );
};
