/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumCard } from './AlbumCard';

export const AlbumList = (props) => {
  console.log('the data is passed')
  return (
    <div className="album-list-wrapper">
      {props.data.albums.items.map((singleAlbum) => {
        return (
          <AlbumCard key={singleAlbum.id} albumDetails={singleAlbum} />
        )
      })}
    </div>)
}