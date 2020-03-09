import React from 'react'
import { AlbumCard } from 'AlbumCard'
import { AlbumImage } from 'AlbumImage'

export const AlbumsContainer = (props) => {

  // const { albums } = props

  const albums = props.albums
  console.log('albums', albums)

  // return (
  //   <article>
  //     {albums.map(album => {
  //       return (
  //         <div><h2>{album.name}</h2></div>)
  //     })}
  //     <p>Hej tjo</p>
  //   </article>

  return (
    <article>
      {albums.map(album => {
        return (
          <AlbumCard key={album.id}
            title={album.name}
            artists={album.artists}
            images={album.images}
          />
        )
      })}
    </article>
  )
}


// bild + namn på album rendered using .map()

// artistnamn egen component med .map()