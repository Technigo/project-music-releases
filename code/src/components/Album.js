import React from 'react';
import Icons from './Icons';

const Album = (props) => {
  const { albumsArray } = props
  return (
    <section className="album-container">
      {albumsArray.map((mappedOutItem) => (
        <div className="album-card" key={mappedOutItem.id}>
          <div className="image-container">
            <img src={mappedOutItem.images[0].url} className="album-image" alt="Cover" />
            <Icons />
          </div>
          <a href="{mappedOutItem.external_urls.spotify}" className="album-name" target="_blank">  {mappedOutItem.name} </a>
          <div className="artists"> {mappedOutItem.artists.map((mappedOutArtist) => (
            <a href="{mappedOutArtist.external_urls.spotify}" className="artist-name" key={mappedOutArtist.id} target="_blank">
              <div>{mappedOutArtist.name}</div>
            </a>
          ))}
          </div>
        </div>
      ))}
    </section>
  )
}
export default Album