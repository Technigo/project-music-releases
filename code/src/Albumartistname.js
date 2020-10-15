import React from 'react';

export const Albumartistname = props => {
    console.log("We want artist name:", props)
    return (
        <a href={props.linkArtist} >
        <div class="artist-name">{props.name}</div>
        </a>
    )
}