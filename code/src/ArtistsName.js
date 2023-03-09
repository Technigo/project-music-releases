import React from 'react';

export const ArtistName = (props) => {
  console.log('artist', props);
  return (
    <div>
      <p>{props.artists}</p>
    </div>
  );
};
