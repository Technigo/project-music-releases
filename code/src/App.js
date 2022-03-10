import React from 'react'
import data from './data.json'

import Header from './components/Header'
import Album from './components/Album'

export const App = () => {


   return (
    <section>
      <header>
        <Header />
      </header>
      
      <div className='album-container'>
      {data.albums.items.map((albumData) => {
        return (
          <Album
            key={albumData.id}
            data={albumData}
            />
            )
          })
        }
      </div>
    </section>
    )
  }
