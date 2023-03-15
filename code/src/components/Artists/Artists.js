import React from 'react';
import { SvgIcons } from '../SvgIcons/SvgIcons';
import data from '../../data.json';
import './Artists.css';

export const Artists = () => {
  return (
    <div className="album-wrapper">
      {data.albums.items.map((album) => {
        return (
          <div className="single-album-container" key={album.id}>
            <div className="album-cover-div">
              <img
                className="album-cover"
                alt="Album cover"
                src={album.images[0].url}
                // eslint-disable-next-line react/jsx-closing-bracket-location
              />
              <SvgIcons />
            </div>
            <span className="album-name">{album.name}</span>
            <div className="artist-names-div">
              {album.artists.map((artist, index) => (
                <span className="artist-name" key={artist.id}>
                  {' '}
                  <a
                    href={`https://open.spotify.com/artist/${artist.id}`}
                    target="blank_"
                    // eslint-disable-next-line react/jsx-closing-bracket-location
                  >
                    {artist.name}
                  </a>
                  {index < album.artists.length - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};
