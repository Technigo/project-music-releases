import React from 'react'
import data from './data.json'
import playlistData from './stretch-goal.json'

// then we the vinyl at import in app.js
import Vinyl from './components/Vinyl'
import Playlists from './components/Playlists'

// I just put this in variable so it's easier
const albumArray = data.albums.items
const playlistArray = playlistData.playlists.items

console.log(playlistData.playlists.items)

// then here we have the "entire" website
// run this and you will see all the albums and artists
export const App = () => {
  return (
    <div className="project-container">
      <aside className="sidebar">
        <h1 className="main-heading"> Playlist header </h1>
        <hr className="horizontal-line" />
        <div className="playlist-container">
          {playlistArray.map((playlist) => {
            return (
              // prettier-ignore
              <Playlists
                key={playlist.id}
                cover={playlist.images[0].url}
                playlistName={playlist.name}
                playlistUrl={playlist.external_urls.spotify}
                trackNumber={playlist.tracks.total} />
            )
          })}
        </div>
        <hr className="horizontal-line" />
        <p className="signature">
          Created by {/* prettier-ignore */}
          <a href="https://github.com/loulunds" target="_blank" rel="noopener noreferrer"><span className="github-link">Lousanne {' '}</span></a>
          and {/* prettier-ignore */}
          <a href="https://github.com/jakobxlindstrom" target="_blank" rel="noopener noreferrer"><span className="github-link">Jakob</span>{' '}</a>
          for Technigo 2021
        </p>
      </aside>
      <main>
        <header className="header">
          <h1 className="main-heading">New Albums and Singles</h1>
          {/* prettier-ignore */}
          <img
            src="/icons/spotify4.svg"
            alt="spotify logo"
            className="header-logo" />
        </header>
        <hr className="horizontal-line" />
        <div className="container">
          {albumArray.map((album) => {
            return (
              // prettier-ignore
              <Vinyl
                key={album.artists[0].id}
                cover={album.images[1].url}
                song={album.name}
                titleUrl={album.external_urls.spotify}
                artist={album.artists} />
            )
          })}
        </div>
      </main>
    </div>
  )
}
