import React from 'react';
import { Icons } from "./Icons";

// The album-card containing the props and including the icons. 
export const AlbumInfo = props => {
  return (
  <section className="album-card">

    <div className="album-cover">
      <img 
        className="album-image" 
        src={props.image} 
        alt="Album cover" 
        tabIndex="0"
      />
      <Icons />
    </div>

    <a 
      href={props.linkAlbum} 
      target="_blank" 
      rel="noopener noreferrer"> 
    <p className="album-name">{props.name}</p>
    </a>

    <span>{props.linkArtist}{props.artist}</span>

  </section> 
  )
};
