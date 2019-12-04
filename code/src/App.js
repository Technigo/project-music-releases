import React from 'react'
import data from './data.json'
import Album from './Components/Album/Album'
import Artist from 'Components/Artist.js'

console.log(data)

const App = () => {
  return (
   <div>
     {data.albums.items.map(album =>{
       return (
         <div>
           <Album image={album.images[1].url} title={album.name} url={album.external_urls.spotify}/>
           {album.artists.map(artist =>{
             return (
              <Artist name={artist.name} url={artist.external_urls.spotify}/>
             )
           })}
         </div>
       )
     })}
   </div>

  )
}

export default App