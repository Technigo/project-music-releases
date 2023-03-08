import React from 'react';

export const AlbumArtists = (props) => {
  return (
    <div>
      {props.artistsInput.map((artist) => {
        return <div>{artist.name}</div>;
      })}
    </div>
  );
};
