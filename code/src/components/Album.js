import React from 'react';
import Artist from './Artist'

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
        <Artist
          key={artist.id}
          name={artist.name} />
      ))}

    </div>

  );
};

export default (Album);
