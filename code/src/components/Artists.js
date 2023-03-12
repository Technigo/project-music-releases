import React from 'react';

const generateDelimiter = (index, length) => {
  if (index === length - 2) {
    return ' & ';
  } else if (index < length - 2) {
    return ', ';
  }
};

export const Artist = (props) => {
  const { artist } = props;
  return (
    <span>
      {artist.map((items, index) => {
        return (
          <>
            <a className="artist-link" href={items.external_urls.spotify} target="_blank" rel="noopener noreferrer">{items.name}</a>
            {generateDelimiter(index, artist.length)}
          </>
        )
      })}
    </span>
  )
};