import React from 'react'
import './playlist.css'

export const Playlist = (props) => {
  //console.log(props)
  return (

    <div className="playlistCard">
      <img className="playlistCover" src={props.item.images[0].url} alt="playlist cover" />
      <a className="playlistTitle" href={props.item.external_urls.spotify}>{props.item.name}</a>
      <a className="playlistOwner" href={props.item.owner.external_urls.spotify}>by {props.item.owner.display_name}</a>
      <p className="playlistTracks">{props.item.tracks.total} tracks</p>
    </div>

  )
}