import React from "react";
import './artist.css'

export const Artist = (props) => {
  return (
    <a className="artistInfo" href={props.item.external_urls.spotify}>{props.item.name}</a>
  )
}