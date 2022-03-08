import React from 'react'

const Playlist = (props) => {
  return (
    <div className="playList-Cards">
      <img
        className="playList-Icon"
        src={props.cover}
        target="_blank"
        alt="playlist"
      />
      <a href={props.playlistUrl} target="_blank">
        <h3 className="playlist-Name">{props.playlist}</h3>
      </a>
    </div>
  )
}
export default Playlist
