// Imopterat data från react och json.

import React from 'react'
import data from './data.json'
import playlistData from './stretch-goal.json'

// components lägger vi in här.

import Footer from './components/Footer'
import Playlist from './components/Playlist'
import MainHeader from './components/MainHeader'
import SidebarHeader from './components/SidebarHeader'
console.log(data)
console.log(playlistData)
//Variables

const Albums = data.albums.items
const playListArray = playlistData.playlists.items

// Här bygger vi våran hemsida, kom ihåg att skriva in className="" ist för class="" för css styleing!!  :)

export const App = () => {
  return (
    <div className="project-music-container">
      <h1>
        Hej hej Jenny! :)
        <MainHeader />
      </h1>
      <section className="sidebar">
        <h1>Hej hej</h1>

        <p></p>
      </section>
      <Footer />
    </div>
  )
}
