import React from 'react'
import data from './data.json'
import AlbumCard from './components/AlbumCard'

// console.log(data.albums.items);

let workArr = data.albums.items.map( album => {
  return {
    image: album.images[1].url,
    name: album.artists.map( artist => artist.name), 
    album: album.name,
    artistUrl: album.artists.map( artist => artist.external_urls.spotify)
  }
});
  
 

console.log(workArr);

export const App = (props) => {
  return (
    <div className="content-container">
      <h1 className="main-heading">New Albums & Singles</h1>
      <div className="album-grid-container">
    {
      workArr.map( release => <AlbumCard 
                                image={release.image}  
                                key={release.name} 
                                album={release.album} 
                                artist={release.name}
                                artistUrl={release.artistUrl}
                                 />)
}     
     </div>
    </div>
  )
}
