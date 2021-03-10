import React from 'react'
import data from './data.json'
import Header from './components/Header'
import AlbumCard from './components/AlbumCard'

// console.log(data)

const App = () => {
  return (
    <>
    <Header /> 
    <div>
    {data.albums.items.map(item => (
        <AlbumCard key={item.id} albumContent = {item} />
      ))}
    </div>
    </>
  )
}

export default App