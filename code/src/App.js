import React from "react"
import "./index.css"
import data from "./data.json"
import stretch from "./stretch-goal.json"
import Wrapper from "./components/Wrapper"
import Sidebar from "./components/Sidebar"

export const App = () => {
  const albumData = data.albums.items
  const playlists = stretch.playlists.items

  return (
    <>
      <h1 className="sidebar-heading">Popular playlists</h1>
      <div className="content-wrapper">
        <section className="sidebar-container">
          <Sidebar key={playlists.id} playlists={playlists} />
        </section>

        <div className="album-wrapper">
          <h1 className="heading">New albums & singles</h1>
          {albumData.map((album) => {
            return (
              <div key={album.id} className="album-container">
                <Wrapper
                  coverImage={album.images[1].url}
                  albumName={album.name}
                  albumLink={album.external_urls.spotify}
                  // -- map for the artists info --
                  artistName={album.artists.map((item) => (
                    <a
                      href={item.external_urls.spotify}
                      key={item.id}
                      className="artists-divider"
                    >
                      {item.name}
                    </a>
                  ))}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
