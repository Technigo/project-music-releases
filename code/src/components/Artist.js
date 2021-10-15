import React from 'react';

// ARTIST NAME COMPONENT
const Artist = (props) => {
  return (
    <div className="artist">
      {props.item.artists.map((artist, i) => {
        let divider = '';
        if (i < props.item.artists.length - 2) {
          divider = ', ';
        } else if (i === props.item.artists.length - 2) {
          divider = ' & ';
        }
        return (
          <span key={artist.id} className="artist-name">
            <a href={artist.external_urls.spotify}>{artist.name}</a>
            {divider}
          </span>
        );
      })}
    </div>
  );
};

export default Artist;
