import React from 'react'


export const AlbumName = (props) => {
    return <a className="album-name hover-underline" href={props.item.external_urls.spotify} target="_blank" rel="noopener noreferrer">{props.item.name}</a>

}