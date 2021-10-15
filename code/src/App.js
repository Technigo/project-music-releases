import React from 'react'
import data from './data.json'
import AlbumCard from './components/AlbumCard'

// Making a new array to store only relevant information for this project
let workArr = data.albums.items.map( album => {
  return {
    image: album.images[1].url,
    name: album.artists.map( artist => {
      return {
      artistName: artist.name,
      artistId: artist.id
      }
      }
      ), 
    album: album.name,
    albumId: album.id,
    artistUrl: album.artists.map( artist => artist.external_urls.spotify),
    albumUrl: album.external_urls.spotify
  }
});
// We use props to pass down information that React understands, to component card "AlbumCard". 
//We call ArbumCard-component for each entery of the workArr
export const App = (props) => {
  return (
    <div className="content-container">
      <h1 className="main-heading">New Albums & Singles</h1>
      <div className="album-grid-container">
    {
      workArr.map( release => <AlbumCard 
                                image={release.image}  
                                key={release.albumId} 
                                album={release.album} 
                                allArtists={release.name}                              
                                artistUrl={release.artistUrl}
                                albumUrl={release.albumUrl}
                                 />)
}     
     </div>
    </div>
  )
}
