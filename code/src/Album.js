import React from "react";
import data from "./data.json";
import { Artist } from "./Artists";

export const Album = () => {
  return (
    <div className="music-card">
      {data.albums.items.map(item => {
        return (
          <div className="Album">
            <div>
              <div className="album-image" key={item.id}>
                <a href={item.external_urls.spotify}>
                  <div className="overlay">
                    <div className="icons">
                      <i className="far fa-heart"></i>
                      <i className="far fa-play-circle"></i>
                      <i className="fas fa-ellipsis-h"></i>
                    </div>
                  </div>
                  <img
                    className="album-cover"
                    src={item.images[0].url}
                    alt="album cover"
                  ></img>
                </a>
              </div>
            </div>
            <div>
              <a href={item.external_urls.spotify}>
                <div className="album-name">{item.name}</div>{" "}
              </a>
              {item.artists.map(artist => {
                return (
                  <Artist
                    key={artist.id}
                    link={artist.external_urls.spotify}
                    name={artist.name}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Album;
