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
        <Controls playUrl={props.url} />
      </AlbumArt>

      <h2 className="album-name">
        <a href={props.url}>{props.name}</a>
      </h2>
      {props.artists.map((artist, i) => {
        return (
          <React.Fragment key={artist.id}>
            {i > 0 && ", "}
            <Artist name={artist.name} url={artist.external_urls.spotify} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
