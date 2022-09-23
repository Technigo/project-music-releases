import React from "react";

export const AlbumArtist = (props) => {
  return (
    <div className='AlbumInfo'>
      {props.artistArray.map((artist, index) => {
        return (
          <a
            className="linkArtistName"
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="Artist">{artist.name}</h3>
          </a>
        );
      })}
    </div>
  );
};
