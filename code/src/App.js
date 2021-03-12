import React from 'react'
import data from './data.json'
import Album from './components/Album'


export const App = () => {

// AN ARRAY WITH ALL ALBUMS
const albumArray = data.albums.items


  return (
    <>
    <div className="main">
      <div className="header-container">
        <h1 className="heading">New albums & singles</h1>
      </div>
      <div className="album-wrapper">

        {albumArray.map((album) => {
              return (
              <Album 
              image={album.images[0].url} 
              title={album.name} 
              hrefAlbum={album.external_urls.spotify} 
              artist={album.artists.map((item, index) => <a>{item.name}</a>)}
              hrefArtist={album.artists.map((item) => item.external_urls.spotify)}
              key={album.name}/>
             )
          })
        }
      </div>
    </div>
    </>
  )
}


