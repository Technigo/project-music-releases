import React from "react";
import stretchgoal from '../stretchgoal.json'

const Playlists = () => {
    const playlistsArray = stretchgoal.playlists.items

    return (
        <div className="playlists" >
            <h2 className="playlists-header">Top playlists</h2>
            {playlistsArray.map((playlist) => {
                return (
                    <div key={playlist.id}>
                        <div className="playlist-image">
                            <img className="image-playlists" src={playlist.images[0].url} alt="image-playlists" />
                            <div className="icon"><a href={playlist.external_urls.spotify} className="playlist-link" target="_blank" rel="noreferrer noopener" title="Click to listen"><img className="play2" src="./icons/play.svg" alt="play icon" /></a></div>
                        </div>
                        <a href={playlist.external_urls.spotify} className="playlist-link" target="_blank" rel="noreferrer noopener">{playlist.name} </a>
                        <p className="track-amount">{playlist.tracks.total} tracks</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Playlists