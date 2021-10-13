import React from 'react';

const Artists = (props) => {
  const { artistsArray } = props;
  return (
    <div className="all-artists-names">
      {artistsArray.map((artist) => {
        return (
          <a href={artist.external_urls.spotify} className="artist">
            {artist.name}
          </a>
        );
      })}
    </div>
  );
};

export default Artists;
