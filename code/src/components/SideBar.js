import React from 'react'

import { CategoryHeading } from "./CategoryHeading"
import { Card } from "./Card"

export const SideBar = (props) => {
    return (
        <aside className="side-bar">
            <CategoryHeading heading="Playlists" />
            <div className="side-container">
                {props.playlistData.map((item) =>
                    < Card
                        key={item.external_urls.spotify}
                        title={item.name}
                        titleURL={item.external_urls.spotify}
                        image={item.images[0].url}
                    />
                )}
            </div>
        </aside>
    )
}