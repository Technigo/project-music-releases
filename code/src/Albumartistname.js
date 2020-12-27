import React from 'react';

export const AlbumArtistName = props => {
    return (
        <a href={props.linkArtist} className="artist-name" >
            {props.name}
        </a>
    )
}