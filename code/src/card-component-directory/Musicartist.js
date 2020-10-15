import React from 'react';

const iterateArtistNames = (name) => {
    return name.name;
};

// Component for the music album which will fetch the album url and title and will give the artists a comma and space for each of the a
// artist names if they are more than one
export const MusicArtist = (prop) => {
    return (
        <a href={prop.artistsname[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">
           <h4 className="artist-name">{prop.artistsname.map(iterateArtistNames).join(", ")}</h4>
        </a>       
    );
};  