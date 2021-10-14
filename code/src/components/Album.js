import React from "react";
import { Artist } from "./Artist";


export const Album = (props) => {
  return (
    <article className="article">

      <div className="img-container">
        <div className="overlay">
          <img src="./icons/heart.svg" className="heart-icon" alt="heart icon" />
          <img src="./icons/play.svg" className="play-icon" alt="play icon" />
          <img src="./icons/dots.svg" className="dots-icon" alt="dots icon" />
        </div>
          <img className="album-img" src={props.albumImg} alt="album" />
      </div>
      <a className="album-link" href={props.albumLink} target="_blank" rel="noopener noreferrer">
      <div className="album-name">
      <p>{props.albumName}</p>
      </div>
      </a>

    <div> 
      { props.artists.map(artist => {
      return (
        <Artist 
        artistName = {artist.name}
        artistLink =  {artist.external_urls.spotify}
        />
      )
    })
      }
    </div>

    </article>
  );
};
