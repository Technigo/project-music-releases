import React from "react";
import './artist.css'

export const Artist = (props) => (
  <div className="artistInfo">
    <a href={props.item.artists[0].external_urls.spotify} alt="Open artist in Spotify" target="_blank" rel="noopener noreferrer">{props.item.artists[0].name}</a>
  </div>
)
