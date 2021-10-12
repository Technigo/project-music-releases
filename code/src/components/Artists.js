import React from 'react';

const Artists = (props) => {
  const { artistsArray } = props;
  const allArtists = artistsArray.map((artist) => {
    return artist.name;
  });
  return (
    <a>
      {allArtists.map((artist) => {
        return <h3 className="artist">{artist}</h3>;
      })}
    </a>
  );
};

export default Artists;
