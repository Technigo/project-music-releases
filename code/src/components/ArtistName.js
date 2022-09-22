import React from 'react';

const ArtistName = ({ name }) => {
  return (
    <p className="ArtistName">
      {name}
    </p>

  );
};

export default (ArtistName);

// @ TODO add “&” if two artist names, and “,” if more than two