import React from 'react'

export const Artist = (props) => {
    return (
        <a className="album-artist" href={props.url}>{props.name}</a>
    )
}