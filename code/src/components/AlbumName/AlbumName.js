import React from "react";
import "./AlbumName.css";

export const AlbumName = (props) => {
  return (
    <div className="AlbumName">
      <a href={props.singleAlbumItem.external_urls.spotify} target="_blank" rel="noreferrer noopener">
        <h2>{props.singleAlbumItem.name}</h2>
      </a>
    </div>
  );
}
