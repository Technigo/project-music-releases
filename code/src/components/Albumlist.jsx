import React from 'react'
import { CoverImg } from './CoverImg';
import { AlbumName } from './AlbumName';
import { ArtistName } from './ArtistName';
import data from 'data.json';

console.log(data);

export const AlbumList = () => {
  return (
    <section className='app-body'>
        {data.albums.items.map((item) => (
         <article className='album-card' key={item.id}>
            <CoverImg item={item} />

             <div className='album-artist-container'>
            <AlbumName item={item} />
            <ArtistName item={item}  />
            </div>
            
         </article>
        ))}
    </section>
  )
};