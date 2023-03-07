/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumArtist } from './AlbumArtist'
import data from './data.json';

export const AlbumCard = () => {
  return (
    <>
      <h2>Album Card</h2>
      <div>
        {data.albums.items.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
        <div><AlbumArtist /></div>
      </div>
    </>
  )
}