import React from 'react';

export const AlbumCard = (props) => {
  return (
    <div className="album-card">
      <div className="image-container">
        <div className="overlay">
          <div className="button-container">
            <div className="button-small"><img alt={'Like icon'} src={require('./icons/heart.svg')} /> </div>
            <div className="button-play"><img alt={'Play icon'} src={require('./icons/play.svg')} /></div>
            <div className="button-small"><img alt={'More icon'} src={require('./icons/dots.svg')} /></div>
          </div>
        </div>
        <img className="album-image" src={props.image} alt={props.artistName} />
      </div>
      <a href={props.albumURL} target="_blank" rel="noopener noreferrer" className="album-text">{props.albumName}</a>

      {/* Loops over each artist in the "artists" array  */}
      {props.artists.map((artist) => {
          console.log(artist)
          return <a
            key={artist.id}
            className="artist-text"
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer">
            {artist.name}
          </a>
        })}

    </div>
  );
};
