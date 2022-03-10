import React from 'react';

export const Artist = (props) => {
    const artist = props.artist
    const index = props.index
    const length = props.length

    // console.log(artist)
    // let blabla
    let returnLink =  <p><a className='artist-name' key={artist.id} href={artist.external_urls.spotify}>{artist.name}</a></p>

    if (length > 2 && index === 0) {
        // blabla = ',&nbsp;'
        returnLink =  <p><a className='artist-name' key={artist.id} href={artist.external_urls.spotify}>{artist.name}</a>,&nbsp;</p>
    } else if (length > 1 && index === 0){
        // blabla = <p>&amp;&nbsp;</p>
        returnLink =  <p><a className='artist-name' key={artist.id} href={artist.external_urls.spotify}>{artist.name}</a> &amp;&nbsp;</p>
    } else if (length > 2 && index === 1) {
        // blabla = <p>&nbsp;&amp;&nbsp;</p>
        returnLink = <p><a className='artist-name' key={artist.id} href={artist.external_urls.spotify}>{artist.name}</a>&nbsp;&amp;&nbsp;</p>
    }

    return returnLink
}