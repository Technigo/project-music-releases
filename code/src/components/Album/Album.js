import React from 'react';
import './Album.css';
import Artists from 'components/Artists/Artists';
import AlbumImage from 'components/AlbumImage/AlbumImage';

const Album = (props) => {
  return (
    <div className="album">
      <div className="album__image--wrapper">
        <AlbumImage image={props.image} url={props.url} />
      </div>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="link link__album">
        {props.name}
      </a>
      {props.artists.map((artist) => (
        <Artists
          key={artist.id}
          name={artist.name}
          url={artist.external_urls.spotify}
        />
      ))}
    </div>
  );
};

export default Album;
