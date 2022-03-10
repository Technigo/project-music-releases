import React from 'react'

const Playlist = (props) => {
  return (
    <div className="playListCards">
      <img
        className="playListIcon"
        src={props.cover}
        target="_blank"
        alt="playlist"
        rel="noopener noreferrer"
      />
      <a href={props.playlistUrl} target="_blank" rel="noopener noreferrer">
        <h3 className="playlistName">{props.playlistName}</h3>
      </a>
      <p className="playlistTrack">{props.trackNumber} Tracks</p>
    </div>
  )
}
export default Playlist
