import React from 'react';



const AlbumCover = (props) => {
  return (
    <div className="album-cover">
        <img className="album-img" src={props.item.images[0].url} alt="Album cover"></img>

          <div className="icons">
              <img className="icon-heart" src= "./icons/heart.svg" alt="heart icon"></img>
              <img className="icon-play" src= "./icons/play.svg" alt="play-icon"></img>
              <img className="icon-dots" src= "./icons/dots.svg" alt="dots-icon"></img>
          </div>

    </div>
  );
}

export default AlbumCover;