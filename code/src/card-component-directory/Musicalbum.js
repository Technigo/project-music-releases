import React from 'react';

// Component for the music album which will fetch the album url and title
export const Musicalbum = (prop) => {
    return (
        <a href={prop.albumlink.spotify} target="_blank" rel="noopener noreferrer">
            <h4 className="album-name">{prop.albumname}</h4>
        </a>            
    );
};  