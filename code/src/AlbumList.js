import React from 'react';
import { Album } from './Album';
import { Artist } from './Artist';
import { AlbumTitle } from './AlbumTitle';
import data from './data.json';

export const AlbumList = () => {
    return ( 
        <>
        <div className="album-container">
            {data.albums.items.map((item) => (
                <div className="album-cover">
                    <Album key={item.id} item={item}/>
                    <Artist key={item.artists} item={item}/>
                    <AlbumTitle key={item.name} item={item}/>
                </div>
            ))}
        </div>
        </>
         
    
    )
}