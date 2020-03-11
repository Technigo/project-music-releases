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

  return (
    <article className='AlbumContainer'>
      {albums.map(album => {
        return (
          <>
            <AlbumCover bananaimage={album.images[1].url} />
            <AlbumCard key={album.id} appletitle={album.name} orangeartists={album.artists} />
          </>
        )
      })}

      <h1>Title</h1>
      <Button href={'Click'} />
      <p>Some text here</p>
    </article>

  )


}