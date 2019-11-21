import React from 'react'
import './playlist.css'

export const Playlist = (props) => {
  //console.log(props)
  return (
    <div>
      <p>Title: {props.item.name}</p>
      <p>Owner: {props.item.owner.display_name}</p>
      <p>Tracks: {props.item.tracks.total}</p>
    </div>
  )
}