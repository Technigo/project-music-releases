import React from "react"
import "./index.css"
import data from "./data.json"
import Wrapper from "./components/Wrapper"

export const App = () => {
  const albumData = data.albums.items

  return (
    <>
      <h1 className="heading">New albums & singles</h1>
      <div className="album-wrapper">
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
    </>
  )
}
