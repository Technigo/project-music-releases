import React from 'react';

const ArtistName = (props) => {
  return (
    <p className="ArtistName">
      <a href={props.url}>{props.name}</a>
    </p>
  );
};

export default (ArtistName);