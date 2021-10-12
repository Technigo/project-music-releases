import React from 'react';

const Artists = (props) => {
  const { artistsArray } = props;
  const allArtists = artistsArray.map((artist) => {
    return artist.name;
  });
  return <h3 className="artist">{allArtists.join(', ')}</h3>;
};

export default Artists;
