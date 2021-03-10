import React from 'react'

export const Artist = (props) => {
    return (
        <div>
            <a href={props.artistUrl} target="_blank">
                <p className="artists">{props.artistName}</p>
            </a>
        </div>
    )
    }
