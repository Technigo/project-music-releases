import React from "react";
import Artists from 'components/Artists';

const Album = ({ coverImage, albumUrl, albumName, albumArtists }) => {
  //needs to be the same as in app file
  // console.log('artistsUrl', artistsUrl);
  console.log("albumArtists", albumArtists);

  return (
    <div className="albumsWrapper">
      {/* albumwrapper from APP.JS */}
      <div className="imageWrapper">
        <div className="icon-image-wrapper">
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

      <div class="artistWrapper">
        <Artists artist={albumArtists}/>
      </div>
    </div>
    </div>
      
  );
};

export default Album; // defalut export viktigt
