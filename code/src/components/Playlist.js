import React from 'react';

export const Playlist = (props) => {
  return (
    <div className="playlist-card">
      <a
        key={props.playlist.id}
        href={props.playlist.external_urls.spotify}
        className="playlist-link"><img className="playlist-image" src={props.playlist.images[0].url} alt={props.playlist.description} />
        <div className="playlist-text">
          <span className="playlist-name">{props.playlist.name}</span>
          <p className="playlist-description">{props.playlist.description}</p>
        </div>
      </a>
    </div>
  )
}