import React from "react";
import { Artist } from "./Artist";
import { ReactComponent as PlayButton } from './icons/play.svg';
import { ReactComponent as HeartButton } from './icons/heart.svg';
import { ReactComponent as DotButton } from './icons/dots.svg';

//props are passed into components like arguments are into function
export const Album = (props) => {
  return (
    <>
      <div className="album-container">
        <div className="image-container">
          <img src={props.img[1].url} alt="Album cover" />
          <div className="icon-container">
            <HeartButton className="album-icon" />
            <PlayButton className="album-icon" />
            <DotButton className="album-icon" />
          </div>
        </div>
        <h2>
          {props.name}
        </h2>
        <p>
          {props.artists.map(artist =>
            <Artist
              key={artist.name}
              name={artist.name}
            />
          )}
        </p>
      </div>
    </>
  );

}