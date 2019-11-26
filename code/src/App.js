import React from 'react'
import data from './data.json'
import { Album } from './Album'
// import { Artist } from './Artist'

import './style.css'
import './index.css'
import './mediaqueries.css'
import './icons.css'
import './Album.css'

const music = data.albums.items


console.log(data)

export const App = () => {
  return (

    <div className="wrapper">
      <h1>New releases - albums &amp; singles</h1>
      <div className="musicContainer">
        {music.map((album) => {
          return <Album
            key={album.name + album.artists[0].name}
            url={album.external_urls.spotify}
            src={album.images[0].url}
            songName={album.name}
            artistUrl={album.artists[0].external_urls.spotify}
            songArtist={album.artists[0].name} />
        })}
      </div>
    </div>
  )
}