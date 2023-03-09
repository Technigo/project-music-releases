import React from 'react';
import likeBtn from 'icons/heart.svg';
import playBtn from 'icons/play.svg';
import moreBtn from 'icons/dots.svg';

export const AlbumButtons = () => {
  console.log('btns');
  return (

    <div className="btn-box">
      <button id="like-btn" className="like-btn" type="button">
        <img src={likeBtn} alt="like button" />
      </button>

      <button id="play-btn" className="play-btn" type="submit">
        <img src={playBtn} alt="play button" />
      </button>

      <button id="more-btn" className="more-btn" type="submit">
        <img src={moreBtn} alt="more button" />
      </button>

    </div>

  );
}

