import React from 'react';
import data from 'data.json';
import Artist from 'Components/Artist'; 


// Components
import Album from 'Components/Album'

const AlbumList = () => {
  const listOfAlbums = data.albums.items
  console.log(listOfAlbums)
  return ( 
    <>
      {/* Mapping through the data, returning image, song title and artist for each album */}
      {listOfAlbums.map((album) => { 
        return ( <div className="album--wrapper">
          <Album image={album.images[1].url} songName={album.name} artistName={album.artists[0].name} key={album.images[1].url} />
          <Artist names={album.artists.map(artist => { return artist.name + ' ' })} url={album.artists.map(artist => { return artist.external_urls.spotify })} />
         </div> )
      })
      }      
    </>)
  }

export default AlbumList