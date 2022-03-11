import React from 'react'
import data from './data.json'

import Header from './components/Header'
import Album from './components/Album'

export const App = () => {

const albums = data.albums.items.filter(type => type.album_type === 'album')
const singles = data.albums.items.filter(type => type.album_type === 'single')


  return (
    <section className='container'>
      <header>
        <Header />
      </header>
      
      <article className='container'>
        <h2>Albums</h2>
        <div className='album-container'>
          {albums.map((albumData) => {
            return (
              <Album
              key={albumData.id}
              data={albumData}
              />
              )
            })
          }
        </div>
      </article>

      <article className='container'>
      <h2>Singles</h2>
      <div className='single-container'>
      {singles.map((albumData) => {
        console.log(albumData)
        return (
          <Album
          key={albumData.id}
          data={albumData}
          />
          )
        })
      }
      </div>
      </article> 

    </section>
    )
  }
