import React from 'react'

import data from './data.json'

import Album from './components/Album'

console.log(data, 'data from app')


export const App = () => {
  return (

    <main>
    <section className='section'>
       
            
            {data.albums.items.map((item) => (
            <Album

              img={item.images[1].url}
              albumName={item.name}
              albumLink={item.external_urls.spotify}
              artistLink={item.artists[0].external_urls.spotify}
              artistName={item.artists[0].name}
              
              
              
              />
             ))}
            
       
    
    </section>
    </main>
  
  )
}
