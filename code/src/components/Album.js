import React from "react";
import { Artist } from "./Artist";


export const Album = (props) => {
  return (
    <article className="article">

      <div className="img-container">
        <img src={props.albumImg} alt="album" />
      </div>

      <div className="album-name">
      <p>{props.albumName}</p>
      </div>

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
