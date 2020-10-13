import React from "react";
import { Artist } from "./Artist";
import { ReactComponent as PlayButton } from './icons/play.svg';
import { ReactComponent as HeartButton } from './icons/heart.svg';
import { ReactComponent as DotButton } from './icons/dots.svg';

//props are passed into components like arguments are into function
export const Album = (props) => {

  //create array that converts the array of objects into an array with names only.
  const artistsArr = props.artists.map(artist => artist.name);

  //create a string from the array with commas between the names.
  const artistsStr = artistsArr.join(", ");
  console.log(artistsStr);
  return (
    <>
      <div className="album-container">
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
        <p>
          <Artist
            key={artistsStr}
            artistNames={artistsStr}
          />
        </p>
      </div>
    </>
  );

}