import React from 'react'
import data from './data.json'
// import Header from './components/Header'
import Article from './components/Article'

// import Hover from './components/Hover'

console.log(data)

export const App = () => {
  return (
    <div>
      {data.albums.items.map((album) => (
          <Article 
            img={album.images[1].url}
            title={album.name}
            artists={album.artists}
          />
      ))}
    </div>
  )
}
