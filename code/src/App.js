import React from "react"
import data from "./data.json"
import Wrapper from "./components/Wrapper"

export const App = () => {
  // AN ARRAY WITH ALL ALBUMS
  const albumData = data.albums.items
  console.log(albumData)

  return (
    <div className="main">
      <h1 className="heading">New albums & singles</h1>
      <div className="album-wrapper">
        {albumData.map((album) => {
          return (
            <div className="album-card">
              <Wrapper
                coverImage={album.images[1].url}
                albumName={album.name}
                albumLink={album.external_urls.spotify}
                artistName={album.artists.map((item) => (
                  <a>{item.name}</a>
                ))}
                artistLink={album.artists.map(
                  (item) => item.external_urls.spotify
                )}
                key={album.id}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
