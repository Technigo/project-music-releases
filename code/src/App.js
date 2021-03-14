import React from 'react'
import data from './data.json'
import Album from './components/Album'
import Header from './components/Header'


export const App = () => {
  return (
    <>
    <header className="header">
      <Header />
    </header>
    <section className="album-container">
      {data.albums.items.map(items => {
        return <Album 
                  album={items.name} 
                  albumurl={items.external_urls.spotify} 
                  img={items.images[0].url} 
                  artist={items.artists}
                  key={items.id} />
      })}
    </section>
    </>
  )
}





// Used to get name and url from first map are left in code for reference 
//contributors={items.artists[0].name} 
//artisturl={items.artists[0].external_urls.spotify}


