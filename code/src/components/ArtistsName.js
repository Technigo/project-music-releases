import React from 'react';

export const ArtistsName = (props) => {
  console.log('artist', props);
  return (
    <span className="artistContainer">
      <a href={props.artistUrl} target="_blank" rel="noreferrer" className="artistLink">
        <span>{props.name}</span>
      </a>
      {props.isLast ? '' : ' & '}
    </span>
  );
};

