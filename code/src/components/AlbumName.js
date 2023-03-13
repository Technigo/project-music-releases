
/* eslint-disable jsx-quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */
import React from 'react';

const AlbumName = (props) => {
    // console.log(props.albums.items.external_urls.spotify)
    // console.log(props)
    return(
        <a className='AlbumNameLink' href={props.AlbumUrl} target="_blank" rel="noopener noreferrer"><h3 className='AlbumName'>{props.AlbumName}</h3></a>
    );
}

export default AlbumName;