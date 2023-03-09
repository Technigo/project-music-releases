import React from 'react';

export const ArtistsName = (props) => {
  console.log('artist', props);
  return (
    <div className="artist">
      <a href={props.link}>{props.name}</a>
    </div>
  );
};