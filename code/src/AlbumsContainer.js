import React from 'react'

export const AlbumsContainer = (props) => {

  // const { albums } = props

  const albums = props.albums
  console.log('albums', albums)


  return (
    <article>
      {albums.map(album => { return (<div><h2>{album.name}</h2></div>) })}
      <h1>Title</h1>
      <p>Hej hej</p>
    </article>
  )
}


// bild + namn på album rendered using .map()

// artistnamn egen component med .map()