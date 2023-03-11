import React from 'react';
import './Album.css'

export const Album = (props) => {
  return (
    <div className="album-container">{props.spotifyData.albums.items.map((albumTitle) => {
      return (
        <div className="single-album-container">
          <div className="album-cover">
            <a
              href={albumTitle.external_urls.spotify}
              target="_blank"
              rel="noreferrer">
              <div className="icon-container">
                <img src="./icons/heart.svg" alt="heart" />
                <img src="./icons/play.svg" alt="play-button" />
                <img src="./icons/dots.svg" alt="dots" />
              </div>
            </a>
            <img src={albumTitle.images[1].url} className="cover" alt="pic" />
          </div>
          <a
            href={albumTitle.external_urls.spotify}
            target="_blank"
            rel="noreferrer">
            <h2>{albumTitle.name}</h2>
          </a>
          <div className="artist-container">{albumTitle.artists.map((singleArtist) => {
            return (
              <a href={singleArtist.external_urls.spotify} className="artist-link" target="_blank" rel="noreferrer">
                <h3><span>{singleArtist.name}</span></h3>
              </a>)
          })}
          </div>
        </div>
      )
    })}
    </div>
  );
}
