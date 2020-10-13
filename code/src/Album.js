import React from 'react';
import { Artist } from './Artist';

 export const Album = (props) => {
  return (
    <>
      <article className="album-container">
        <img src={props.image} alt="Album cover" />
        <a href={props.albumUrl}>Album name: {props.name}</a> 
        <p>
          Album URL: {props.albumUrl}
        </p>
        {
          props.artists.map(artist => {
            return (
              <Artist 
              key = {artist.name}
              artistName = {artist.name}
              artistUrl = {artist.external_urls.spotify}
              />
            )
          })
        }
      </article>
    </>
    );
};
