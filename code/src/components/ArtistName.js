import React from 'react';

const ArtistName = (props) => {
  return (
    <p className="ArtistName">
      <a href={props.url}>Artist name: {props.name}</a>
    </p>
  );
};

export default (ArtistName);
// @ TODO add “&” if two artist names, and “,” if more than two