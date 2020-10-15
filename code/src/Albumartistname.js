import React from 'react';

export const Albumartistname = props => {
    console.log("We want artist name:", props)
    return (
        <a href={props.linkArtist} >
        <div className="artistname">{props.name}</div>
        </a>
    )
}