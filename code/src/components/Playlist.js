/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
import React from 'react';

const Playlist = (props) => {
    return (
        <div className="playlist-card">
            <a
            key={props.playlist.id}
            href={props.playlist.external_urls.spotify}
            className="playlist-link"
            target="_blank"
            rel="noopener noreferrer"><img className="playlist-image" src={props.playlist.images[0].url} alt="playlist" />
            <div className="playlist-text">
                <span className="playlist-name">{props.playlist.name}</span>
                <p className="playlist-description">{props.playlist.description}</p>
            </div>  
            </a>
        </div>
    )
}
export default Playlist;