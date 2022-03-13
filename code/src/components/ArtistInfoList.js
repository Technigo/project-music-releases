import React from 'react'

import Artistinfo from './Artistinfo.js'


const ArtistInfoList = ({artists}) => {  
    return artists.map((artist, index) => {
    const lastIndex = artists.length - 1;
    let artistName = '';

    if(index === lastIndex) {
        artistName = artist.name;
    } else {
        artistName = artist.name + ", ";
    }
    
    return ( 
        <Artistinfo 
        key={artist.id}            
        artist={artistName}            
        artistUrl={artist.external_urls.spotify}
        />
    )
    })
}

export default ArtistInfoList
