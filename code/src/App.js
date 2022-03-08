// Imopterat data från react och json.

import React from 'react'
import data from './data.json'
import playlistData from './stretch-goal.json'

console.log(data)
console.log(playlistData)

// components lägger vi in här.

// import Footer from './components/Footer'
// import Playlist from './components/Playlist'
// import MainHeader from './components/MainHeader'
// import SidebarHeader from './components/SidebarHeader'
//Variables

// Här bygger vi våran hemsida, kom ihåg att skriva in className="" ist för class="" för css styleing!!  :)

export const App = () => {
  return (
    <div className="project-music-container">
      <h1>Hej hej Jenny! :) </h1>
    </div>
  )
}
