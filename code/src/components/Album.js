import React from "react";
import Artists from 'components/Artists';

const Album = ({ coverImage, albumUrl, albumName, albumArtists}) => {

  // console.log("albumArtists", albumArtists);

  return (
    <div className="albumWrapper">
      <div className="imageWrapper">
        <img className="albumImage" src={coverImage} alt="album cover" />

        <div className="icon-image-wrapper">
          <div className="icon-wrapper">
            <img className="heartIcon icon" src="./icons/heart.svg" />
            <div className="playWrapper">
              <a href={albumUrl}>
                <img className="playIcon icon" src="./icons/play.svg" />
              </a>
            </div>

            <img className="dotsIcon icon" src="./icons/dots.svg" />
          </div>
        </div>
        <h2 className="albumName">
          <a href={albumUrl}>{albumName}</a>
        </h2>
      </div>

      <div className="artistWrapper">
        <Artists 
        artistList={albumArtists}
        />
      </div>
    </div>
  );
};

export default Album; // defalut export viktigt
