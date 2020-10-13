import React from 'react';
import data from './data.json';

import { AlbumInfo } from './AlbumInfo';


export const AlbumDiv = () => {
    return (
        <div>
            {data.albums.items.map(album => {
                return <AlbumInfo image={album.images[1].url} name={album.name} artist={album.artists[0].name}/>
            })}
        </div>
    );
};