import React from 'react';

export const Albumartistname = props => {
    console.log("We want artist name:", props)
    return (
        <a className="artistname" href={props.linkArtist} >
       {props.name}
        </a>
    )
}