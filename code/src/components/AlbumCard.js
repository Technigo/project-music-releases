import React from "react";

export const AlbumCard = (props) => {
  // console.log(props)
  return (
    <div className="AlbumCard">
      <div className="image-container">
        <div className="overlay">
          <div className="button-container">
            <div className="button-small"><img src={require('./icons/heart.svg')} /> </div>
            <div className="button-play"><img src={require('./icons/play.svg')} /></div>
            <div className="button-small"><img src={require('./icons/dots.svg')} /></div>
          </div>
        </div>
        <img className="albumImage" src={props.image} alt={props.artistName} />
      </div>
      
      <p className="artist-text">{props.albumName}</p>
      <p className="album-text">{props.artistName}</p>
    </div>
  );
};
