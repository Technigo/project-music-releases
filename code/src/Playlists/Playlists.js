import React from "react";
import stretchgoal from '../stretchgoal.json'

const Playlists = () => {
    const playlistsArray = stretchgoal.playlists.items

    return (
        <div className="playlists" >
            <h2 className="playlists-header">All playlists</h2>
            {playlistsArray.map((playlist) => {
                return (
                    <div key={playlist.id}>
                        <div>
                            <img className="image-playlists" src={playlist.images[0].url} alt="playlist-cover" />
                        </div>
                        <a href={playlist.external_urls.spotify} className="playlist-link" target="_blank" rel="noreferrer noopener">{playlist.name} </a>
                        <p className="track-amount">Total tracks:{playlist.tracks.total}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Playlists