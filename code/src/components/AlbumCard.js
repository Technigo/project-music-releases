/* eslint-disable linebreak-style */
import React from 'react';
import { AlbumArtist } from './AlbumArtist';
import { Icons } from './Icons';

export const AlbumCard = (props) => {
  return (
    <article className="album-card-wrapper">
      <div className="image-wrapper">
        <img className="album-cover" src={props.albumDetails.images[1].url} alt="album cover" />
        <Icons />
      </div>
      <h2 className="album-name">
        <a href={props.albumDetails.external_urls.spotify} target="_blank" rel="noreferrer">{props.albumDetails.name}</a>
      </h2>
      <h3 className="artist-name">{props.albumDetails.artists.map((artist) => {
        return (
          <AlbumArtist key={artist.id} artistDetails={artist} />
        )
      })}
      </h3>
    </article>
  )
}