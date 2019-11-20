import React from 'react'
import data from './data.json'
import { Album } from './components/Album'
import { Artist } from 'components/Artist'

console.log(data)

const releases = data.albums.items;

export const App = () => {
  return (
    <section className="releases">
      <h1>New albums &amp; singles</h1>
      {releases.map(album => {
        return album.artists.map(artist => {
          return (
            <Album key={album.name} name={album.name} albumUrl={album.external_urls.spotify} image={album.images[1].url}>
              <Artist key={artist.name} artist={artist.name} artistUrl={artist.external_urls.spotify} />
            </Album>
          )
        })
      })}
    </section>
  );
};
