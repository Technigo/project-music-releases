import React from 'react';

const AlbumName = (props) => {
    return(
        <a className='AlbumNameLink' href={props.AlbumName} target="_blank" rel="noopener noreferrer"><h3 className='AlbumName'>{props.AlbumName}</h3></a>
    );
}

export default AlbumName;