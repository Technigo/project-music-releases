import React from "react";
import data from "./data.json";

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
              <div className="album-name">{item.name}</div>
              <a
                className="artist"
                href={item.artists[0].external_urls.spotify}
              >
                {item.artists[0].name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Album;
