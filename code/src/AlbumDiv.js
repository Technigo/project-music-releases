import React from 'react';
import data from './data.json';

import { AlbumName } from './AlbumName';


export const AlbumDiv = () => {
    return (
        <div>
            {data.albums.items.map(album => {
                return <AlbumName name={album.name} artist={album.artists[0].name}/>
            })}
        </div>
    );
};