import React from 'react';

export const Artist = (props) => {
  return (
    <span className='artist-container'>
      <a
        href={props.artist.external_urls.spotify}
        target='_blank'
        rel='noopener noreferrer'
      >
        <h3 className='artist'>{props.artist.name}</h3>
      </a>
    </span>
  );
};
