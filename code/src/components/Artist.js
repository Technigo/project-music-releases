import React from 'react';

export const Artist = props => {
    return (
        <a href={props.artistLink} class="artist">
            {props.artistName}
        </a>
    )
}