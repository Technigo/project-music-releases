import React from 'react'

const Playlists = (props) => {
  return (
    <div className="playlist-cards">
      {/* prettier-ignore */}
      <img
        className="playlist-icon"
        src={props.cover}
        target="_blank"
        rel="noopener noreferrer"
        alt="playlist" />
      <a href={props.playlistUrl}>
        <h3 className="playlist-name">{props.playlistName}</h3>
      </a>
      <p className="platlist-track">{props.trackNumber} tracks</p>
    </div>
  )
}

export default Playlists
