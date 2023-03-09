import React from 'react';

const Artist = (artist) => {
  return (
    <div className="artist">
      {artist.artistName.artists.map((singleArtist) => {
        return (
          <span>{singleArtist.name}</span>
        )}
          )}
    </div>
  )};


export default Artist;

// albumDetails specad i AlbumList. singleAlbum ist?