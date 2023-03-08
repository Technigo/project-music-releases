import React from 'react';

export const Album = ({ image, albumname, artistname }) => {
    return (
        <article className='album-card'>
            <img className='album-img' src={image} alt= "Album Cover" />
            <div className='albumname'>{albumname}</div>
            <div className='artistname'>{artistname}</div>
        </article>
    )

}

// Link to album (external_urls - spotify)
// Link to artist (artists - 0 - external_urls)
// The name of each artist involved with a comma between
// Include icons here?