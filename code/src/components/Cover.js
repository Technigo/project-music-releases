import React from 'react';

// ALBUM COVER COMPONENT
const Cover = (props) => {
  return (
    <div className="cover">
      <img
        className="cover-img"
        src={props.item.images[1].url}
        alt="Album cover"
      />

      <div className="icons">
        <img
          className="icons-heart icons-small icon"
          src="./icons/heart.svg"
          alt="like icon"
        />
        <img
          className="icons-play icon"
          src="./icons/play.svg"
          alt="play icon"
        />
        <img
          className="icons-dots icons-small icon"
          src="./icons/dots.svg"
          alt="read more icon"
        />
      </div>
    </div>
  );
};

export default Cover;
