import React from 'react'
import Overlay from './Overlay'

const AlbumCard = (props) => {
  const albumsArray = props.albumsArray

  return (
    <>
      {albumsArray.map((item) => (
        <div className="album-card" key={item.id}>
          <div className="overlay-container">
            <img src={item.images[1].url} className='album-image' alt='Cover'/>
            <Overlay />
          </div>
          <a href={item.external_urls.spotify} className='album-name'>{item.name}</a>
          <div className='artists'>{item.artists.map((artist) => (
            <a className='artist-name' href={artist.external_urls.spotify} key={artist.id}>{artist.name}</a>
          ))}
          </div>
        </div>
      ))}
    </>
  )
}
export default AlbumCard