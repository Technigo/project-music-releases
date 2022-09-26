import React from "react";
import Artists from "components/Artists"; //importing component artists

const Album = ({ coverImage, albumUrl, albumName, albumArtists }) => {
  return (
    <div className="albumWrapper">
      <div className="imageWrapper">
        <img className="albumImage" src={coverImage} alt="album cover" />
        <div className="icon-wrapper">
          <img className="icon" src="./icons/heart.svg" />
          <div className="playWrapper">
            <a href={albumUrl}>
              <img className="playIcon" src="./icons/play.svg" />
            </a>
          </div>
          <img className="icon" src="./icons/dots.svg" />
        </div>
      </div>
      <h2 className="albumName">
        <a href={albumUrl}>{albumName}</a>
      </h2>
      <div className="artistWrapper">
        <Artists artistList={albumArtists} />
      </div>
    </div>
  );
};

export default Album;
