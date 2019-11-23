import React from "react"
import data from './data.json'

export const Links = () => {
  return (
    <div>
      {data.albums.items.map((album) => {
        return <div key={album.artists[0].external_urls.spotify}> <a href=
          {album.artists[0].external_urls.spotify}>Link</a></div>
      })}
    </div >
  )
}