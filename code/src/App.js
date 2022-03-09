import React from 'react'
import data from './data.json'
import Album from './components/Album'


export const App = () => {
  return (
    <main>
     
    <section className='page'>
     

     <div class="title-and-border">New albums & singles</div>
        <div class="album-section">
            {data.albums.items.map((item) => (
            <Album
                key={item.id}
                img={item.images[1].url}
                albumName={item.name}
                albumLink={item.external_urls.spotify}
                artistLink={item.artists[0].external_urls.spotify}
                artistName={item.artists[0].name}
              />

             ))}
             </div>
    </section>
    </main>
  
  )
}
