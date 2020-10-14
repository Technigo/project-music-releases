import React from 'react';
import { DisplayIcons } from './DisplayIcons'
import { Artist } from './Artist';

 export const Album = (props) => {
  return (
    <>
      <article className="album-container">
        <div className="image-container">
          <img className="album-image" src={props.image} alt="Album cover" />
          <DisplayIcons />
        </div>
        <a className="album-name" href={props.albumUrl} target="_blank">{props.name}</a> 
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
