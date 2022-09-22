import React from 'react';
import Artist from './Artist'

const Album = (props) => {
  return (
    <div className="Album">
      <div className="Cover"><img src={props.img} alt="Album cover" /></div>
      <p className="AlbumName">Album name: {props.name}</p>

      {props.artists.map((artist) => (
        <Artist
          key={artist.id}
          name={artist.name} />
      ))}

    </div>

  );
};

export default (Album);
