import React from 'react';
// import { AlbumImage } from './components/AlbumImage';
// import { AlbumName } from './components/AlbumName';
import { AlbumArtist } from './AlbumArtist';
import { AlbumCover } from './AlbumCover';
import { AlbumName } from './AlbumName';
import './Album.css';

// Album component which is rendered using .map()
// and which you pass the album data into using props.

// Album image
// Album name
// Name of each artist involved with a comma in between

export const Album = (props) => {
  console.log("It's here", props.spotifyList)
  return (
    <div className="albums-container">
      {props.spotifyList.albums.items.map((singleAlbum) => {
        return (
          <div className="single-album" key={singleAlbum.id}>
            <AlbumCover cover={singleAlbum.images[1].url} />
            <AlbumName
              urlAlbumName={singleAlbum.external_urls.spotify}
              albumName={singleAlbum.name} />
            <AlbumArtist key={singleAlbum.id} artistsArray={singleAlbum.artists} />
          </div>
        )
      })}
    </div>
  );
}

// <AlbumCover cover={singleAlbum.images[1].url} />