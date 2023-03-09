/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumArtist } from './AlbumArtist';

export const AlbumCard = (props) => {
  return (
    <article>
      <div className="image-wrapper">
        <img src={props.albumDetails.images[1].url} alt="album cover" />
      </div>
      <h2 className="album-name">{props.albumDetails.name}</h2>
      <h3 className="artist-name">{props.albumDetails.artists.map((artist) => {
        return (
          <AlbumArtist key={artist.id} artistDetails={artist} />
        )
      })}
      </h3>
    </article>
  )
}