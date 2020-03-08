import React from "react"
import data from "./data.json"

export const Artist = (props) => {
    return (
        props.item.artists.map((test) => {
            return <a className="artist-name hover-underline" href={test.external_urls.spotify} target="_blank">{test.name}</a>
        })
    )
}