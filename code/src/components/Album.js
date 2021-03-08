import React from 'react';

export const Album = props => {
    return (
    <a href={props.albumLink} class="album-title">
        {props.albumTitle}
    </a>
    )  
}