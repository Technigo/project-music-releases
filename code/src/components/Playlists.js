import React from "react";
import stretchgoal from "../stretchgoal.json";


export const Playlists = () => {
    return (
        <aside className="playlists">
        <h2 className="playlist-header">Top Playlists</h2>
        {stretchgoal.playlists.items.map(playlist => {
            return (
                <>
                    <a href={playlist.external_urls.spotify} className="playlist-link">{playlist.name}</a>
                    <div className="playlist-cover">
                        <img src={playlist.images[0].url} className="image-playlist" alt="album cover" />
                        <img src="./icons/play.svg" alt="play icon" className="play-icon-small" />
                    </div>
                </>
            )
        })}
        </aside>
        )
}