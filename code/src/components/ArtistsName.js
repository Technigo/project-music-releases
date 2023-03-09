import React from 'react';

export const ArtistsName = (props) => {
  console.log('artist', props);
  return (
    <div className="artist">
      <p>{props.name}</p>
    </div>
  );
};