import React from 'react'
import data from './data.json'
import Album from './components/Album'


console.log(data)
console.log(data.albums.items[0].images[0].url)



export const App = () => {
  return (
    <div className="album-container">
      {data.albums.items.map(items => {
        return <Album album={items.name} img={items.images[0].url} artist={items.artists}/>
      })}
    </div>
  )
}
