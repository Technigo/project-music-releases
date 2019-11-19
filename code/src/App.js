import React from 'react'
import data from './data.json'
// import { Album } from './Album'

console.log(data.albums.items)

// const Artist = () => {
//   return (
//     <div>
//     </div>
//   )
// }

export const App = () => {
  return (
    
    <div>
      {data.albums.items.map((album) => {
        return <div key={album.id}>
          <img src='{album.images[0].url}' alt='Album cover'></img>
        <br></br>  
        {album.name} -
        {album.artists[0].name}
          <br></br>
          <a href='
          {album.artists[0].external_urls.spotify}'>Link</a>
          <hr></hr>

        </div>
      })}
    </div>
  )
}

