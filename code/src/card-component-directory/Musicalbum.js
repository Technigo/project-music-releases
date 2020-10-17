import React from 'react';

// Component for the music album which will fetch the album name and url
export const MusicAlbum = (prop) => {
    return (
        <a href={prop.albumlink.spotify} target="_blank" rel="noopener noreferrer">
            <h4 className="album-name">{prop.albumname}</h4>
        </a>            
    );
};  

/* Above we're accessing both the spotfiy url and the album name that we already got from the array
in the MusicCard */