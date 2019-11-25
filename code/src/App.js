import React from 'react'
import data from './data.json'

export const App = () => {
  return (
    <section>
      <h2>New albums and singles</h2>
      <hr />
      <Albums albums={data.albums.items}/>
    </section>
  )
}

export const Album = (props) => {
  return (
    <div class="album">
      <img src={props.img} alt="Album"></img>
      <p class="title">{props.title}</p>
      <p class="artist">{props.artist}</p>
    </div>
  )
}

export const Albums = (props) => {
  const AlbumList = props.albums.map((album) => <Album img={album.images[1].url} title={album.name} artist={album.artists[0].name} />
  )
  return (
    <div class="album-holder" id="album-holder">
      {AlbumList}
    </div>
  )
}