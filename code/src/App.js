import React from 'react'
import data from './data.json'
import Album from './components/Album';
// import Artist from './components/Artist';

console.log(data)
console.log(data.albums.items[0].images[1].url)

export const App = () => {
  return (
    <div>
    {data.albums.items.map((item) => (
     <Album
      image = {item.images[1].url} 
      title = {item.name}

      />
    ))}
    </div>
    
  )
}



