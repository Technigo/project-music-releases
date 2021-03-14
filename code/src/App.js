import React from 'react'
import data from './data.json'
import Header from './components/Header'
import AlbumCard from './components/AlbumCard'

const App = () => {
  return (
    <>
    <Header /> 
    <div className="container">
      {data.albums.items.map(item => (
        <AlbumCard key={item.id} albumContent = {item} />
      ))}
    </div>
    </>
  )
}

export default App