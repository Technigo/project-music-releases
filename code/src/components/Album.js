import React from 'react';
import ArtistName from './ArtistName'

const Album = (props) => {
  return (
    <div className="Album">
      <div
        className="Cover"
        style={{
          backgroundImage: `url("${props.img}")`
        }}
        alt="Album cover" />
      <p className="AlbumName">{props.name}</p>

      {props.artists.map((artist) => (
        <ArtistName
          key={artist.id}
          name={artist.name} />
      ))}

    </div>

  );
};

export default (Album);
