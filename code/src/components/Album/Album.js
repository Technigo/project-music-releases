import React from 'react';
import './Album.css';
import Artists from 'components/Artists/Artists';
import AlbumIcons from 'components/AlbumIcons/AlbumIcons';

const Album = (props) => {
  // console.log(props);
  return (
    <div className="album">
      <img className="album__image" src={props.image} alt="Album Cover Art" />
      <div className="album__icons--wrapper">
        <AlbumIcons />
      </div>
      <h3>{props.name}</h3>
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
