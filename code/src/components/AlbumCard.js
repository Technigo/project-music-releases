import React from "react";
import DescriptionContainer from "./DescriptionContainer";

const AlbumCard = props => {
  return (
    <div className="albumCard-container">
      <article className="album-card">
        <div className="img-container">
          <img
            className="cover-img"
            src={props.img}
            alt="album or single cover"
          />
          <div className="overlay">
            <div className="icon-container">
              <img className="icon" src="./icons/heart.svg" alt="icon heart" />
              <img
                className="icon-play"
                src="./icons/play.svg"
                alt="icon play"
              />
              <img
                className="icon"
                src="./icons/dots.svg"
                alt="icon read more"
              />
            </div>
          </div>
        </div>
      </article>
      <DescriptionContainer
        title={props.song}
        singer={props.artist}
        hrefAlbum={props.hrefAlbum}
        key={props.song}
      />
    </div>
  );
};

export default AlbumCard;
