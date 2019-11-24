import React from 'react'
import data from './data.json'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Album } from './components/Album'
import { AlbumCover } from './components/AlbumCover'
import { AlbumOptions } from './components/AlbumOptions'
import { Artist } from 'components/Artist'

console.log(data)

const releases = data.albums.items;

export const App = () => {
  return (
    <section className="releases">
      <Header title="New albums &amp; singles" />
      <div className="album-grid">
        {releases.map(album => {
          return (
            <Card key={album.id}>
              <Album
                name={album.name}
                url={album.external_urls.spotify}>
                <AlbumCover
                  imageMedium={album.images[1].url}
                  imageMediumSize={album.images[1].width}
                  imageLarge={album.images[0].url}
                  imageLargeSize={album.images[0].width}>
                  <AlbumOptions />
                </AlbumCover>
              </Album>
              {album.artists.map(artist => {
                return (
                  <Artist
                    key={artist.id}
                    name={artist.name}
                    url={artist.external_urls.spotify} />
                )
              })}
            </Card>
          )
        })
        })}
        </div>
    </section>
  );
};
