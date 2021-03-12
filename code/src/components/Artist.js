import React from 'react'

export const Artist = (props) => {
    return (
        <a className="artist-link" href={props.artistLink} target="_blank" rel="noopener noreferrer">
          {props.artistName}
        </a>
    )
}