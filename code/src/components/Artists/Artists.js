import React from 'react';

const Artists = (props) => {
  // Function to figure out of the artist name should have a specific delimeter
  const getDelimiter = (length, index) => {
    if (index >= 1) {
      if (index === length - 1) {
        return ' & ';
      }
      return ', ';
    } else {
      return '';
    }
  };
  return (
    <span>
      {props.artists.map((artist, index) => (
        <span key={artist.id} className="text-inline">
          {getDelimiter(props.artists.length, index)}
          <a
            key={artist.id}
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
            className="link link__artists">
            {artist.name}
          </a>
        </span>
      ))}
    </span>
  );
};

export default Artists;
