import React from 'react'

const Playlist = (props) => {
  return (
    <div className="playList-Cards">
      <img
        className="playList-Icon"
        src={props.cover}
        target="_blank"
        alt="playlist"
        rel="noopener noreferrer"
      />
      <a href={props.playlistUrl} target="_blank" rel="noopener noreferrer">
        <h3 className="playlist-Name">{props.playistName}</h3>
      </a>
      <p className="playlist-track">{props.trackNumber} Tracks</p>
    </div>
  )
}
export default Playlist
