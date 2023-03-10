import React from 'react';

export const AlbumButtons = () => {
  return (

    <div className="btn-box">
      <button id="like-btn" className="like-btn" type="submit">
        <img src="icons/heart.svg" alt="like button" />
      </button>

      <button id="play-btn" className="play-btn" type="submit">
        <img src="icons/play.svg" alt="play button" />
      </button>

      <button id="more-btn" className="more-btn" type="submit">
        <img src="icons/dots.svg" alt="more button" />
      </button>

    </div>

  );
}

