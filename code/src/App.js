import React from 'react'
import data from './data.json'

import { Album } from './components/Album'

console.log(data)

export const App = () => {
  return (
    <div className="container">
      <Album 
        artist={data.albums.items[0].artists[0].name}
        title={data.albums.items[0].name}
        img={data.albums.items[0].images[1].url}
      />
      <Album 
        artist={data.albums.items[1].artists[0].name}
        title={data.albums.items[1].name}
        img={data.albums.items[1].images[1].url}
      />
      <Album 
        artist={data.albums.items[2].artists[0].name}
        title={data.albums.items[2].name}
        img={data.albums.items[2].images[1].url}
      />
      <Album 
        artist={data.albums.items[3].artists[0].name}
        title={data.albums.items[3].name}
        img={data.albums.items[3].images[1].url}
      />
      <Album 
        artist={data.albums.items[4].artists[0].name}
        title={data.albums.items[4].name}
        img={data.albums.items[4].images[1].url}
      />
      <Album 
        artist={data.albums.items[5].artists[0].name}
        title={data.albums.items[5].name}
        img={data.albums.items[5].images[1].url}
      />
      <Album 
        artist={data.albums.items[6].artists[0].name}
        title={data.albums.items[6].name}
        img={data.albums.items[6].images[1].url}
      />
      <Album 
        artist={data.albums.items[7].artists[0].name}
        title={data.albums.items[7].name}
        img={data.albums.items[7].images[1].url}
      />
    </div>
    
  )
}
