import React from 'react';

import Artist from './Artist.js';
import AlbumImage from './AlbumImage.js';

export const Album = prop => {
    return (
        <div className="album-card">
            <AlbumImage album={prop.album_data}/>
            <a href={prop.album_data.external_urls.spotify} className="album-name" target="_blank" rel="noopener noreferrer">{prop.album_data.name} </a>
            <div className="artist-container">
                {prop.album_data.artists.map((item, index, array) => {
                    return <Artist key={item.id} artist={item} artist_index={index} artist_array={array}/>
                })}
            </div>  
        </div>        
    )
}
export default Album;