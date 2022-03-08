import React from 'react'

import { Album } from 'components/Album'
import data from './data.json'

console.log(data)
const albums = data.albums.items
console.log(albums)
// albums.map()

export const App = () => {
  return (<section>
    <Album
    albums = {albums}
    // img={albums[0].images[1].url}
    // title={data.albums.items[0].name}
    // artist={data.albums.items[0].artists[0].name}
    />
  </section>
    
  )
}
