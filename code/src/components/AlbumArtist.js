import React from 'react';

export const AlbumArtist = (props) => {
return(
    <a className="linkArtistName" href={props.urlArtistName} target="_blank" rel="noopener noreferrer"><h3 className="Artist">{props.artistName}</h3></a>
);
}