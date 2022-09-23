import React from 'react';
import ArtistName from './ArtistName';

const MusicCard = (props) => {
  console.log(props.recordData.artists);

  return (
    <section className="album-container">
      <div className="image-wrapper">
        <div className="overlay">
          <img
            className="icon heart"
            src="../../icons/heart.svg"
            alt="heart-icon" />
          <a className="icon-link" href={props.recordData.external_urls.spotify}>
            <img
              className="icon play"
              src="../../icons/play.svg"
              alt="play-icon" />
          </a>
          <img
            className="icon dots"
            src="../../icons/dots.svg"
            alt="dots-icon" />
        </div>
        <img
          className="album-image"
          src={props.recordData.images[1].url}
          alt="album-cover" />
      </div>
      <h2 className="album-title">
        <a className="spotify-link" href={props.recordData.external_urls.spotify}>
          {props.recordData.name}
        </a>
      </h2>
      <h3 className="artist-name">
        <ArtistName artists={props.recordData.artists} />
      </h3>
    </section>
  );
};

export default MusicCard;
