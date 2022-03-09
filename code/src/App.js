import React from 'react'

import data from './data.json'

import Album from './components/Album'

console.log(data, 'data from app')


export const App = () => {
  return (

    <main>
    <section className='Section'>
       
            
            {data.albums.items.map((item) => (
            <Album 

              img={item.images[1].url}
              albumName={item.name}
              albumLink={item.external_urls.spotify}
              artists={item.artists} 
              />
             ))}

             
            
       
    
    </section>
    </main>
  
  )
}
