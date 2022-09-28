import React from 'react';

const ArtistName = (props) => {
  return (
    <p className="artist-name">
      <a href={props.url}>{props.name}</a>
    </p>
  );
};

export default ArtistName;
