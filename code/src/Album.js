import React from "react";

import { Artist } from "./Artist";
import { ReactComponent as PlayButton } from './icons/play.svg';
import { ReactComponent as HeartButton } from './icons/heart.svg';
import { ReactComponent as DotButton } from './icons/dots.svg';

//props are passed into components like arguments are into function
export const Album = (props) => {

  //create array of objects containing artist name, URL for each album.
  const artistsArr = props.artists.map((artist) => {
    const name = artist.name;
    const url = artist.external_urls.spotify;
    return { name, url };
  });


  return (

    <div className="album-container">
      <a href={props.album_url} target="_blank" rel="noopener noreferrer">
        <div className="image-container">
          <img className="album-image" src={props.img[1].url} alt="Album cover" />
          <div className="icon-container">
            <HeartButton className="album-icon" />
            <PlayButton className="album-icon play-icon" />
            <DotButton className="album-icon dots-icon" />
          </div>
        </div>
        <h2>
          {props.name}
        </h2>
      </a>
      {/* Mount artist component for each element in the artists array */}
      {artistsArr.map((artist, index, arr) => (
        <Artist
          name={artist.name}
          url={artist.url}
          index={index}
          length={arr.length}
        />
      ))}
    </div>
  );

}