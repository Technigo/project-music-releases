import React from 'react';
import { Album } from './Album'
import { Artist } from './Artist'
import data from './data.json'

export const AlbumList = () => {
    return (
        <div>
           {data.albums.items.map((item) => (
            <Album key={item.id} item={item} />
      ))}
            <Artist/>
        </div>
    )
}