import React from "react";
// import { directive } from "@babel/types";
import { Artist } from "./Artist";
import { Image } from "./Image";
import { AlbumArt } from "./AlbumArt";
import { Controls } from "./Controls";
import "./css/album.css";

export const Album = props => {
  return (
    <div className="album">
      <AlbumArt>
        <Image title={props.name} images={props.images} />
        <Controls />
      </AlbumArt>

      <h2 className="album-name">{props.name}</h2>
      {props.artists.map(artist => {
        return <Artist key={artist.id} name={artist.name} />;
      })}
    </div>
  );
};
