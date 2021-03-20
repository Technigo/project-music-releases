import React from 'react';

import data from './data.json';
import stretchGoal from './stretch-goal.json'; 
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Playlist from './Components/Playlist.js';
import Section from './Components/Section.js';

// Array of playlists for stretchgoals
const playlistArray =stretchGoal.playlists.items
// Array of items from data
const albumArray = data.albums.items
// Array of singles 
const singlesArray = albumArray.filter(single => {
  return single.album_type.includes("single")
} )
// Array of albums
const onlyAlbumArray = albumArray.filter(album =>{
  return album.album_type.includes("album")
})

export const App = () => {
  return (
    <div className="content-container">
      <Header />
      <div className="main">
        <Playlist array={playlistArray}/>
        <div className="section-container">
          <Section array={singlesArray} title="Singles" />
          <Section array={onlyAlbumArray} title="Albums" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
