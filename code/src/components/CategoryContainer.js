import React from 'react'

import { Card } from "./Card"

export const CategoryContainer = (props) => {
    return (
        <div className="categoryContainer">
            {props.data.map((item) =>
                < Card title={item.name} titleURL={item.external_urls.spotify} artist={item.artists} artistURL={item.artists[0].external_urls.spotify} image={item.images[1].url} />
            )}
        </div>
    )
}