import React from 'react';

const iterateArtistNames = (name) => {
    return name.name;
};

// Component for the music album which will fetch the album url and title
export const Musicartist = (prop) => {
    return (
        <a href={prop.artistsname[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">
           <h4 class="artist-name">{prop.artistsname.map(iterateArtistNames).join(", ")}</h4>
        </a>       
    );
};  