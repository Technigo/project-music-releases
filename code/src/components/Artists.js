import React from 'react';

const getSeparator = (i, length) => {
  if (i === length - 2) {
    return ' & ';
  } else if (i < length - 2) {
    return ', ';
  }
  return;
};

const Artists = (props) => {
  const { artistsArray } = props;

  return (
    <div className='all-artists-names'>
      {artistsArray.map((artist, i) => {
        return (
          <a
            key={artist.id}
            href={artist.external_urls.spotify}
            className='artist'
          >
            {artist.name}
            {getSeparator(i, artistsArray.length)}
          </a>
        );
      })}
    </div>
  );
};

export default Artists;
