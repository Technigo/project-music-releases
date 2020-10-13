import React from 'react';
import data from './data.json';

import { AlbumInfo } from './AlbumInfo';
// import { AlbumArtist } from './AlbumArtist';

export const AlbumDiv = () => {
    return (
        <>
            {data.albums.items.map(album => {
                return <AlbumInfo 
                key={album.name}
                image={album.images[1].url} 
                name={album.name} 
                artist={album.artists.map(artist => {
                    return artist.name;
                })}
                linkArtist={album.artists[0].external_urls.spotify} 
                linkAlbum={album.external_urls.spotify}
                />
            })}
        </>
    );
};