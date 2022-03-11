import React from 'react'
import data from './data.json'
import playListData from './stretch-goal.json'

import Header from './components/Header'
import Releases from './components/Releases'
import Playlists from './components/Playlists'



export const App = () => {

const albums = data.albums.items.filter(type => type.album_type === 'album')
const singles = data.albums.items.filter(type => type.album_type === 'single')
const playLists = playListData.playlists.items


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
              <Releases
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
        return (
          <Releases
          key={albumData.id}
          data={albumData}
          />
          )
        })
      }
      </div>
      </article>

      
      <article className='container'>
        <h2>Playlists</h2>
        <div className='album-container'>
          {playLists.map((playlist) => {
            return (
              <Playlists
              key={playlist.id}
              data={playlist}
              />
              )
            })
          }
        </div>
      </article>


    </section>
    )
  }
