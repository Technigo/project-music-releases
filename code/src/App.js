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
        return (
          <Album key={album.id + album.album_type} name={album.name} url={album.external_urls.spotify} image={album.images[1].url}>
            {album.artists.map(artist => {
              return (
                <Artist key={artist.id} name={artist.name} url={artist.external_urls.spotify} />
              )
            })}
          </Album>
        )
      })
      })}
    </section>
  );
};
