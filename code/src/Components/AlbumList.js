import React from 'react';
import data from 'data.json';

// Components
import Album from 'Components/Album'

const AlbumList = () => {
  return ( 
    <>
      {/* Mapping through the data, returning image, song title and artist for each album */}
      {data.albums.items.map((album) => { 
        return (
          // Mounting the Album-component with props for each image, song name and artist.
          <Album image={album.images[1].url} songName={album.name} artistName={album.artists[0].name} key={album.images[1].url} />
        )
      })
      }
    </>)
  }

export default AlbumList