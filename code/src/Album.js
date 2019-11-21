import React from "react";
import './album.css'

export const Album = (props) => (
  <div className="Album">
    {/* Album buttons */}
    {/* Album cover */}
    <div className="AlbumCover">
      <img src={props.image} alt="Album cover"></img>
    </div>
    {/* Album info */}
    <a href={props.linkalbum}>{props.albumname}</a>
    <br></br>
    <a href={props.linkartist}>{props.artistname}</a>
  </div>
)

