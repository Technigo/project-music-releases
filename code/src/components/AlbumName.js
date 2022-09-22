import React from 'react';

const AlbumName = (props) => {
 
return (   
    <a
        className="albumUrl"
        href={props.AlbumLink}
        target="_blank"
        rel="noopener noreferrer"
    >
        {' '}
        <h2>{props.AlbumName}</h2>
    </a>
   )
}

export default AlbumName;