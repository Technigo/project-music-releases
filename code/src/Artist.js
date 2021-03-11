import React from 'react'

export const Artist = (props) => {
    return (
        <a className="artist" href={props.artistUrl} target="_blank">
            {props.artistName}
        </a>
    )
    }
