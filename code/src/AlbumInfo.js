import React from 'react';
import { Icons } from "./Icons";


export const AlbumInfo = props => {
return <section className="album-wrapper">
  <div className="album-card">
  <div className="album-cover">
    <img className="album-image" src={props.image}/>
    <Icons />
  </div>
  <a href={props.linkAlbum}> <p className="album-name">{props.name}</p> </a>
  <a href={props.linkArtist}> <p className="artist-name">{props.artist}</p> </a>
</div>
</section>;
};
