import React from 'react'
import { Button } from 'button'
import { AlbumCard } from 'AlbumCard'
import { AlbumCover } from 'AlbumCover'

export const AlbumsContainer = ({ albums }) => {
  // console.log('data in the button', props)
  // const href = props.href
  // const items = props.items
  // const albums = props.albums
  // const { albums } = props

  console.log('album', albums)
  console.log('image', albums[1].images[2].url)

  return (
    <article className='album'>
      {albums.map(album => {
        return (
          <>
            <AlbumCard key={album.id} appletitle={album.name} orangeartists={album.artists} />
            <AlbumCover bananaimage={album.images} />
          </>
        )
      })}

      <h1>Title</h1>
      <Button href={'Click'} />
      <p>Some text here</p>
    </article>

  )


}