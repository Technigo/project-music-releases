import React from 'react';

import Icons from './Icons';

const Album = (props) => {
  const { albumsArray } = props
  return (
    <>
      {albumsArray.map((mappedOutItem) => (
        <div className="album-card" key={mappedOutItem.id}>
          <div className="image-container">
            <img src={mappedOutItem.images[1].url} className="album-image" alt="Cover" />
            <Icons />
          </div>
          <a href={mappedOutItem.external_urls.spotify} className="album-name">{mappedOutItem.name}</a>
          <div className="artists">{mappedOutItem.artists.map((mappedOutArtist) => (
            <a
              href={mappedOutArtist.external_urls.spotify}
              className="artist-name"
              key={mappedOutArtist.id}>
              <div>{mappedOutArtist.name}</div>
            </a>
          ))}
          </div>
        </div>
      ))}
    </>

  )
}
export default Album
