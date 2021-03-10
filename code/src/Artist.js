import React from 'react'

export const Artist = (props) => {
    return (
        <div>{props.artists.map((artist) => {
            return artist.name
        })}</div>
    )
    }
