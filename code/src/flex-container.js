import React from "react"
import { AlbumCard } from "./Album-Card"
import info from "./stretch-goal.json"
import { PlaylistData } from "./Playlist"
import "./flex-container.css"

export const Final = () => {
    console.log(info)
    return (

        <section className="albums-playlists-container">
            <article className="playlist-container">
                <h2 className="playlist-header">Playlists</h2>
                <PlaylistData />
            </article>
            <article className="flex-container">
                <h1 className="heading">New albums and singles</h1>
                <AlbumCard />
            </article>
        </section>
    )
}