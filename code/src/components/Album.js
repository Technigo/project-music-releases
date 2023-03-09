import React from 'react';
import './Album.css'

export const Album = (props) => {
  return (
    <div className="album-container">{props.spotifyData.albums.items.map((albumTitle) => {
      return (
        <div>
          <img src={albumTitle.images[1].url} alt="pic" />
          <a
            href={albumTitle.external_urls.spotify}
            target="_blank"
            rel="noreferrer">
            <h2>{albumTitle.name}</h2>
          </a>
          {albumTitle.artists.map((singleArtist) => {
            return (
              <a href={singleArtist.external_urls.spotify} target="_blank" rel="noreferrer">
                <h3><span>{singleArtist.name}, </span></h3>
              </a>)
          })}
        </div>)
    })}

    </div>
  );
}