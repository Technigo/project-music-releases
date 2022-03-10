import React from 'react';

const AlbumTitle = (props) => {
    return (
        <a href={props.url}> 
        <h1 className="album-title">{props.name}</h1>
        </a>
        )
}

export default AlbumTitle;