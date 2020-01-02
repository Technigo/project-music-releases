import React from 'react'
import Album from './Album.js'

const Albums = (props) => {
  const AlbumList = props.albums.map((album, index) => 
    (
      <Album 
        key={index} 
        img={album.images[1].url} 
        title={album.name} 
        albumLink={album.external_urls.spotify}
        artists={album.artists} 
      />
    )
  )
  console.log(props)
  return (
    <div className="album-holder" id="album-holder">
      {AlbumList}
    </div>
  )
}

export default Albums