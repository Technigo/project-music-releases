import React from 'react';
import {AlbumArtist} from './AlbumArtist.js';
import { AlbumCover } from './AlbumCover.js';

export const Album = (props) => {
return(
    <>
    <AlbumCover cover = {props.data.images[1].url}/>
    <h2>Album: {props.data.name}</h2>
    <AlbumArtist artistName = {props.data.artists[0].name}/>
    </>
)
}