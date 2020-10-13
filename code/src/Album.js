import React from "react";
import { Artist } from "./Artist";

//props are passed into components like arguments are into function
export const Album = (props) => {
  return (
    <>
      <img src={props.img[2].url} alt="Album cover" />
      <p>
        {props.name}
      </p>
      <p>
        {props.artists.map(artist =>
          <Artist
            key={artist.name}
            name={artist.name}
          />
        )}
      </p>
    </>
  );

}