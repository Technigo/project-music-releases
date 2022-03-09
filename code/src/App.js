import React from 'react'
import data from './data.json'
import Header from 'components/Header.js'
import { Album } from 'components/Album.js'

console.log(data)

export const App = () => {
  return (
    <main>
      <Header />,
      <div className="albumsWrapper">
        {data.albums.items.map(album => {
          return <Album
            key={album.id}
            coverImage={album.images[0].url}
            albumName={album.name}
            albumUrl={album.external_urls.spotify}
            artistName={album.artists.map(artist => {
              return artist.name
            })}
          />
        })}
      </div>
    </main>
  );
};