import React from "react"
import "./artist-name.css"

export const Artist = (props) => {
    return (
        props.item.artists.map((item) => {
            return <a key={item.id} className="artist-name hover-underline" href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer">{item.name}</a>
        })
    )
}