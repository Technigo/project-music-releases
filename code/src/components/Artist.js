import React from 'react';

export const Artist = (props) => {
    const artist = props.artist
    const index = props.index
    const arrayLength = props.length

    /*default return with no comma or ampersand*/
    let returnLink =  <p><a target='_blank' rel="noopener noreferrer" className='artist-name' key={artist.id} href={artist.external_urls.spotify}>{artist.name}</a></p>

    /*returns comma and ampersand for three artists
    and ampersand between two artists*/
    if (arrayLength > 2 && index === 0) {

        returnLink =  <p><a target='_blank' rel="noopener noreferrer" className='artist-name' 
        key={artist.id} href={artist.external_urls.spotify}>{artist.name}</a>,&nbsp;</p>
    }
     else if (arrayLength > 1 && index === 0){

        returnLink =  <p><a target='_blank' rel="noopener noreferrer" className='artist-name' 
        key={artist.id} href={artist.external_urls.spotify}>{artist.name}</a> &amp;&nbsp;</p>
    
    } else if (arrayLength > 2 && index === 1) {

        returnLink = <p><a target='_blank' rel="noopener noreferrer" className='artist-name' 
        key={artist.id} href={artist.external_urls.spotify}>{artist.name}</a>&nbsp;&amp;&nbsp;</p>

    }

    return returnLink
}