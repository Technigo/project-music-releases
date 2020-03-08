import React from 'react'
import data from './data.json'

export const AlbumName = (props) => {
    return <a className="album-name hover-underline" href={props.item.external_urls.spotify} target="_blank">{props.item.name}</a>

}