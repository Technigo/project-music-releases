import React from 'react';
import { Album } from './Album';
import './albumContainer.css'

export const AlbumsContainer = ({ albums }) => {
  console.log('albums', albums);

  return (
    <article className="album-container">
      {albums.map((album) => {
        return (
          // eslint-disable-next-line max-len
          <Album key={album.id} link={album.external_urls.spotify} title={album.name} artists={album.artists} cover={album.images[1].url} />
        )
      })}
    </article>
  )
}
