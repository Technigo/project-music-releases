import React from "react";

import heart from "../icons/heart.svg";
import play from "../icons/play.svg";
import dots from "../icons/dots.svg";
import Artist from "./Artist";

const Album = (props) => {
  return (
    <main className="main">
      <article className="song-card">
        <div className="img-container">
          <img className="cover" src={props.cover} />
          <div className="overlay">
            <div className="icons">
              <img src={heart} width="30px"></img>
              <a href={props.albumLink} target="_blank">
                <img className="play-icon" src={play} width="70px"></img>
              </a>
              <img src={dots} width="30px"></img>
            </div>
          </div>
        </div>

        <section className="song-info">
          <div className="song-name">
            <a>{props.albumName}</a>
          </div>
          <div className="song-artist">
            {props.artist.map((artist) => (
              <Artist
                key={artist.name}
                artistName={artist.name}
                artistUrl={artist.external_urls.spotify}
              />
            ))}
          </div>
        </section>
        {/* {props.albumLink} */}
      </article>
    </main>
  );
};

export default Album;
