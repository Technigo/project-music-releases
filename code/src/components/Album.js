import React from 'react';
import {AlbumCover} from './AlbumCover';
import {AlbumArtist} from './AlbumArtist';

export const Album = (props) => {
       
  return (
        <div className = 'Album'>
        <AlbumCover cover = {props.data.images[1].url}/>
        <h2>Album: {props.data.name} </h2>
        <AlbumArtist artistName = {props.data.artists[0].name}/>
        </div> 
  )
};