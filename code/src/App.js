import React from 'react'
import data from './data.json'
import playlist_data from './stretch-goal.json'
import Header from './components/Header'
import Album from './components/Album'
import Playlists from './components/Playlists'

export const App = () => {
  const AlbumItems = data.albums.items
  const PlaylistItems = playlist_data.playlists.items

  return (
    <>
      <Header />
      <main className="main">
        <Album items={AlbumItems} />
        <Playlists items={PlaylistItems} />
      </main>
    </>
  )
}
