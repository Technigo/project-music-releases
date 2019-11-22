import React from 'react'
import data from './data.json'
import playlistdata from './stretch-goal.json'
import './app.css'
import { Header } from './components/Header'
import { Album } from './components/Album'
import { Playlist } from './components/Playlist'

//console.log(data)
//Get the data from API (data.albums.items)
//Using the id from API to uniqe key ID which is needed for React
//item={item} is getting all data from comp Album 

export const App = () => {
  return (
    <div className="app">

      <section className="sideBar">
        <h1>Popular playlists</h1>
        <div className="playlistContent">
          {playlistdata.playlists.items.map(item => {
            return (
              <Playlist key={item.id} item={item} />
            )
          })}
        </div>
        <div className="sideFooter">Technigo Bootcamp 2019 © Sofie Nyblad</div>
      </section>

      <div className="mainContent">
        <Header />
        <div className="appContent">
          {data.albums.items.map(item => {
            return (
              <Album key={item.id} item={item} />
            )
          })}
        </div>
      </div>

    </div>
  )
}