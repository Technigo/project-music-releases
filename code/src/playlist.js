import React from "react"
import info from "./stretch-goal.json"

export const PlaylistData = () => {
    return (

        info.playlists.items.map((item) => {
            return <article key={item.id} className="playlist-card">
                <img className="playlist-image" src={item.images[0].url} alt="playlist" />
                <a className="playlist-name hover-underline" href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer">{item.name}</a>
                <p className="playlist-tracks">{item.tracks.total} songs</p>
            </article>

        }
        )
    )

}