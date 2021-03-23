import React from 'react'

import Overlay from './Overlay'
import Artist from 'components/Artist'

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
          <div className="album-text">
            <a href={item.external_urls.spotify} className='album-name' target="_blank" rel="noopener noreferrer">{item.name}</a>
            <div className='artists'>{item.artists.map((artist, index) => (
              <React.Fragment key={artist.id}>
                {index > 0 && index !== item.artists.length - 1 && ', '}
                {index !== 0 && index === item.artists.length - 1 && ' & '}
                <Artist artist={artist} />
              </React.Fragment>
            ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
export default AlbumCard