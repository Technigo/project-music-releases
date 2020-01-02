import React from 'react';
import { Icons } from './Icons';

export const Albums = props => {
  return (
    <div
      className="AlbumContainer"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="ArtistContainer">
        <div>
          <div className="iconsContainer">
            <Icons />
          </div>
          <div className="ArtistContent">
            <p className="AlbumName">
              <a className="titleLink" href={props.albumURL}>
                {props.name}
              </a>
            </p>
            <p className="ArtistName">
              <a className="titleLink" href={props.artistURL}>
                {props.artist}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
