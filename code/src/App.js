import React from 'react'
import data from './data.json'
import { Album } from './Album'
import SideBar from './sidebar'

console.log(data)

export const App = () => {
  return (
    <div className="App">
    <SideBar/>
    <h3>New albums & singles</h3>

    <div className="menu-container">
    {data.albums.items.map((item) => (
      <Album 
      key={item.id} 
      image={item.images[1].url}
      linkalbum={item.external_urls.spotify}
      album={item.name}
      linkartist={item.artists[0].external_urls.spotify}
      artist={item.artists[0].name}
      />
    ))}
    </div>
    </div>
  )
}