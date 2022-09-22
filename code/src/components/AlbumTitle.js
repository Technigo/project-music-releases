import React from 'react';

export const AlbumTitle = (props) => {
return(
   /*  <h2 className='AlbumTitle'>{props.AlbumTitle}</h2> */
    <a className="linkAlbumTitle" href={props.urlAlbumTitle} target="_blank" rel="noopener noreferrer"><h1 className="AlbumTitle">{props.AlbumTitle}</h1></a>
);
}