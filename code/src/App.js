import React from 'react'
import data from './data.json'
import Album from './components/Album'


export const App = () => {
  return (
    <main>

    <div className="container">
    <header>
      <div class="title-container">
          New albums & singles
          </div>

      </header>
     
    <section className='page'>

            {data.albums.items.map((item) => (
            <Album
              key={item.id}
              img={item.images[1].url}
              albumName={item.name}
              albumLink={item.external_urls.spotify}
              artists={item.artists} 
              />

             ))}
   

    </section>
    </div>
    </main>
  
  )
}
