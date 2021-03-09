import React from 'react';

export const Artist = props => {
    return (
        <a href={props.artistLink} className="artist">
            {props.artistName}
        </a>
    )
}
