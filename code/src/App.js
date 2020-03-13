import React from 'react'
import data from 'data.json'
import playlists from 'playlist.json'
import { AlbumsContainer } from 'components/AlbumsContainer';
import { PlaylistContainer } from 'components/PlaylistContainer';


export const App = () => {
  return (
    <>
      <aside>
        <h1>Popular playlists</h1>
        <PlaylistContainer playlists={playlists.playlists.items} />
      </aside>
      <main>
        <AlbumsContainer albums={data.albums.items} />
      </main>
    </>
  )
}
