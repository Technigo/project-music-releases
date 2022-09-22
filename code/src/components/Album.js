import React from 'react';
import { AlbumArtist } from './AlbumArtist.js';
import { AlbumCover } from './AlbumCover.js';
import { AlbumTitle } from './AlbumTitle.js';

export const Album = (props) => {
    return (
        <>
            <div className='Album'>
                    <AlbumCover cover={props.data.images[1].url} />
                    <AlbumTitle 
                    AlbumTitle={props.data.name}
                    urlAlbumTitle={props.data.external_urls.spotify}/>
                    <AlbumArtist 
                    artistName={props.data.artists.map((item, index) => <a>{item.name}</a>)}
                    urlArtistName={props.data.artists.map((item) => item.external_urls.spotify)}
                     />
                    
            </div>
        </>
    )
}