import React from 'react'
import { Button } from 'button'
import { AlbumCard } from 'AlbumCard'
import { AlbumCover } from 'AlbumCover'
import 'albumscontainer.css'

export const AlbumsContainer = ({ albums }) => {
  // console.log('data in the button', props)
  // const href = props.href
  // const items = props.items
  // const albums = props.albums
  // const { albums } = props

  console.log('album', albums)
  console.log('image', albums[1].images[1].url)
  console.log('album-url', albums[1].external_urls.spotify)
  console.log('artist-url', albums[1].artists[0].external_urls.spotify)

  return (
    <article className='AlbumContainer'>
      {albums.map(album => {
        return (
          <div className='AlbumBox'>
            <a href={album.external_urls.spotify}>
              <AlbumCover bananaimage={album.images[1].url} />
            </a>
            <AlbumCard key={album.id} appletitle={album.name} orangeartists={album.artists} />
          </div>
        )
      })}

      <h1>Title</h1>
      <Button href={'Click'} />
      <p>Some text here</p>
    </article>

  )


}