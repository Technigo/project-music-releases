import React from 'react'
import Album from './Album.js'

const Albums = (props) => {
  const AlbumList = props.albums.map((album) => <Album img={album.images[1].url} title={album.name} artists={album.artists} />
  )
  return (
    <div class="album-holder" id="album-holder">
      {AlbumList}
    </div>
  )
}

export default Albums