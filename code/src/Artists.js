import React from "react"
import 'Artists.css'

export const Artists = (props) => {
  return (
    <a className="artistInfo" href={props.item.external_urls.spotify} target="_blank" rel="noopener noreferrer">{props.item.name}</a>

  )
}
// {/* <div className="ArtistName">
//     <a href={props.artistUrl}>{props.artistName}</a>
//   </div> */}