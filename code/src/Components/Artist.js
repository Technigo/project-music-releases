import React from 'react';

const Artist = (props) => {
  return (
    <>
      {
        <>
          {/* Returning a complete HTML link with a data-path as href-element, 
                    containing the artist name(s) */}
          <a
            href={props.artistLink}
            target="_blank"
            rel="noopener noreferrer"
            className="artist-name"
          >
            {props.name}
          </a>

          <span className="artist-text">
            {props.amountOfArtists > 2 &&
            props.index >= 0 &&
            props.index < props.amountOfArtists - 2
              ? ', '
              : props.index === props.amountOfArtists - 2
              ? ' & '
              : ''}
          </span>
        </>
      }
    </>
  );
};

export default Artist;
