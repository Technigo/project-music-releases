import React from 'react';

export const Album = props => {
    return (
    <a href={props.albumLink} className="album-title">
        {props.albumTitle}
    </a>
    )  
}