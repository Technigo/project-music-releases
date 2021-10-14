import React from 'react'
import data from './data.json'
import Album from './components/Album';
import Header from './components/Header';

console.log(data)

export const App = () => {
  return (
    
    <div>
      <Header />

      <section className="grid-container">
      {data.albums.items.map((item) => {
        return <Album
          image = {item.images[1].url} 
          link = {item.external_urls.spotify}
          title = {item.name}
          singer = {item.artists.map((item) => <span key = {item.name}>{item.name}</span> )}
          // singer = {item.artists[0].name}
          />
      })}
    
    </section>
    </div>
    
  )
}

export default App


