import React from 'react'
import likeBtn from './icons/heart.svg';
import playBtn from './icons/play.svg';
import ellipsisBtn from './icons/dots.svg';

const Buttons = () => {
  return (
    <div className="btn-container">
      <button type="button" id="like-btn" className="like Btn">
        <img src={likeBtn} alt="like button" />
      </button>

      <button type="button" id="play-btn" className="play Btn">
        <img src={playBtn} alt="play button" />
      </button>

      <button type="button" id="more-btn" className="ellipsis Btn">
        <img src={ellipsisBtn} alt="more button" />
      </button>
    </div>
  )
}

export default Buttons;