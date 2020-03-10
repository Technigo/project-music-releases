import React from "react"
import { FlexContainer } from "./flex-container"
import { PlaylistData } from "./playlist"

export const Final = () => {
    return (
        <section className="albums-playlists-container">

            <article className="playlist-container">
                <PlaylistData />
            </article>
            <FlexContainer />
        </section>

    )
}