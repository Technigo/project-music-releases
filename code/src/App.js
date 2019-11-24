import React from 'react'
import data from './data.json'
import { Album } from './Album'
import './app.css'


console.log(data)

export const App = () => {
  return (
    <div >
      <h1>New Albums and Releases</h1>
      <div className="appcontainer">
        {data.albums.items.map((album) => (
          <Album
            key={album.id}
            image={album.images[1].url}
            uri={album.external_urls.spotify}
            artistname={album.artists[0].name}
            artisturi={album.artists[0].external_urls.spotify}
            albumname={album.name} />
        ))}
      </div>
      <footer>
        <a className="madeby" href="mailto:ninamansster@gmail.com"> First React project by Nina Månsson at Technigo Frontend Bootcamp 2019
    </a>
      </footer>
    </div>
  )
}



