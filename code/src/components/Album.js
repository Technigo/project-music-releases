import React from "react";
import { Artist } from "components/Artist";
import { AlbumCover } from "components/AlbumCover";

import './album.css'

export const Album = (props) => (
  <div className="albumCards">
    {/* Album cover */}
    <AlbumCover
      key={props.item.id} item={props.item}
    />

    {/* Album info */}
    <div className="albumInfo">
      <a href={props.item.external_urls.spotify} alt="Open album in Spotify" target="_blank" rel="noopener noreferrer"> {props.item.name}</a>
    </div>

    {/* Artist info */}
    <div className="artist">
      {props.item.artists.map(item => {
        return (
          <Artist key={item.id} item={item} />
        )
      })}
    </div>
  </div>
)

