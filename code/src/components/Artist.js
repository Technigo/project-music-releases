import React from 'react';

const Artist = (artist) => {
  return (
    <div className="artist">
      {artist.artistName.artists.map((singleArtist) => {
        return (
          <a
          key={singleArtist.id}
          href={singleArtist.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer">
          <span>{singleArtist.name}</span>
          </a>
        )}
          )}
    </div>
  )};


export default Artist;

// albumDetails specad i AlbumList. singleAlbum ist?