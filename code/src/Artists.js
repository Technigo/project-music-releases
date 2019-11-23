import React from "react"
import 'Artists.css'

export const Artists = (props) => (
  <div className="ArtistName">
    <a href={props.artistUrl}>{props.artistName}</a>
  </div>

)