import React from 'react';
import './artist.css';

export const Artist = props => {
    console.log("props: " + props.name);
    return (
        <span className="artist">
            <a href={props.url}>{props.item.name}</a>
        </span>
    )
}