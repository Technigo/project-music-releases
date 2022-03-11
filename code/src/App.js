// Imopterat data från react och json.

import React from 'react'
import data from './data.json'
import playlistData from './stretch-goal.json'

// components lägger vi in här.

import Footer from './components/Footer'
import Playlist from './components/Playlist'
import MainHeader from './components/MainHeader'
import SidebarHeader from './components/SidebarHeader'
import Album from './components/Album'
import Artists from './components/Artists'

console.log(data)
console.log(playlistData)

//Variables

const Albums = data.albums.items
const playListArray = playlistData.playlists.items

// Här bygger vi våran hemsida, kom ihåg att skriva in className="" ist för class="" för css styleing!!  :)

export const App = () => {
  return (
    <div className="project-music-container">
      <div className="sideBar">
        <SidebarHeader />
        <div className="play-list-container">
          {playListArray.map((playlist) => {
            return (
              <Playlist
                key={playlist.id}
                cover={playlist.images[0].url}
                playlistName={playlist.name}
                playlistUrl={playlist.external_urls.spotify}
                trackNumber={playlist.tracks.total}
              />
            )
          })}
        </div>
      </div>
      <main className="main-container">
        <MainHeader />
        <hr className="horizontalLine" />

        <div className="album-image-container">
          {data.albums.items.map((album) => (
            <Album
              img={album.images[1].url}
              title={album.name}
              albumLink={album.external_urls.spotify}
              artists={album.artists}
              key={album.name}
            />
          ))}
        </div>
        <Footer />
      </main>
    </div>
  )
}
