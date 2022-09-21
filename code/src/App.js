import React from 'react'
import data from './data.json'
import Album from './components/Album'


export const App = () => {

const albumArray = data.albums.items
    return (
      <>
      {albumArray.map((album) => {
          return (
              <Album 
              image={album.images[0].url}
              title={album.name} 
              hrefAlbum={album.external_urls.spotify} 
              artist={album.artists.map((item) => <a>{item.name}</a>)}
              hrefArtist={album.artists.map((item) => item.external_urls.spotify)}
              key={album.id}/>
             )
          })
        }
      </>
  )
}