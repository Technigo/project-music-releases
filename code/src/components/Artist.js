import React from 'react';
import './Artist.css';

export const Artist = (props) => {
  return (
    <div className="artistname">
      <a
        href={props.artist.external_urls.spotify}
        key={props.artist.id}
        target="_blank"
        rel="noopener noreferrer">
        {props.artist.name}
      </a>
    </div>
  );
};
