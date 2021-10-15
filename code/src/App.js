import React from "react"
import "./index.css"
import data from "./data.json"
import Wrapper from "./components/Wrapper"

export const App = () => {
  // AN ARRAY WITH ALL ALBUMS
  const albumData = data.albums.items
  console.log(albumData)

  return (
    <>
      <h1 className="heading">New albums & singles</h1>
      <div className="album-wrapper">
        {albumData.map((album) => {
          return (
            <div className="album-container">
              <Wrapper
                key={album.artists.id}
                coverImage={album.images[1].url}
                albumName={album.name}
                albumLink={album.external_urls.spotify}
                artistName={album.artists.map((item) => (
                  <a
                    className="artists-divider"
                    href={item.external_urls.spotify}
                  >
                    {item.name}
                  </a>
                ))}
                // artistLink={album.artists.map(
                //   (item) => item.external_urls.spotify
                // )}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

// artistName={album.artists.name}
// artistLink={album.artists[0].external_urls.spotify}
