import React from 'react'

import { Album } from 'components/Album'
import { Header } from 'components/Header'
import data from './data.json'

const albums = data.albums.items

export const App = () => {
  return (
    <section className='container'>

      <Header />
    
      <div className='flex-container'>
        {albums.map((album) => 
          <Album
            album = {album}
          />
        )}
      </div>

    </section>
  )
}
