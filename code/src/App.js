import React from 'react'
import data from './data.json'
import { Album } from './Components/Album.js'

console.log(data)

export const App = () => {
  return ( 
    <section className='releases'>
      <header className='release-header'>
        <h1 className='release-title'>New albums &amp; singles</h1>
      </header>
      <section className='release-container'>
        
        {data.albums.items.map((item) => {
          return <Album 
          key={item.id} 
          albumTitle={item.name} 
          artists={item.artists[0].name} 
          image={item.images[1].url}  
           url={item.url} />
        })}

      </section>

    </section>
  )
}