import React from "react";
import { ReactComponent as Heart } from "icons/heart.svg";
import { ReactComponent as Play } from "icons/play.svg";
import { ReactComponent as Dots } from "icons/dots.svg";

import Artist from "./Artist";

const Album = ({albums}) => {
  return (
    <div className="wrapper">
      <div className="image-wrapper">
        <img src={albums.images[1].url} className="image" alt={`${albums.name} album cover`}></img>
        <div className="overlay">
          <Heart className="heart-icon"/>
          <Play className="play-icon" onClick={(e) => {
            e.preventDefault();
            window.open(`${albums.external_urls.spotify}`)
            }}/>
          <Dots className="dots-icon" />
        </div>
      </div>
        <a href={albums.external_urls.spotify}><h2  className="album-title">{albums.name}</h2></a>
      {albums.artists.map((artist =>
        <Artist key={artist.id} artists={artist} />
      ))}
    </div>
  )
}

export default Album
