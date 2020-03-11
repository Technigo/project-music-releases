import React from 'react'
import { AlbumCard } from 'AlbumCard'
import './albumscontainer.css'


export const AlbumsContainer = (props) => {

  // const { albums } = props
  const albums = props.albums
  console.log('albums', albums)

  return (
    <article className="albums-container">
      {albums.map(album => {
        return (
          <AlbumCard key={album.id}
            title={album.name}
            artists={album.artists}
            images={album.images}
            albumurl={album.external_urls.spotify}
          />
        )
      })}
    </article>
  )
}