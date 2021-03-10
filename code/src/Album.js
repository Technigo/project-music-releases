import React from 'react';
import Artist from './Artist.js';
import AlbumImage from './AlbumImage.js';

export const Album = prop => {
    console.log("Album", prop)
    return (
        <div className="album-card">
            <AlbumImage album={prop.album_data}/>
            <a href={prop.album_data.external_urls.spotify} className="album-name">{prop.album_data.name}</a>
            {prop.album_data.artists.map(item => {
                 return <Artist key={item.id} artist={item}/>
            })}  
        </div>        
    )
}
