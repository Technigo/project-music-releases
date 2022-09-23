import React from 'react';

const Covers = (props) => {
  return (
    <>
      <div className='image-wrapper'>
        <a
          href={props.playLink}
          target="_blank">
          <img
            className="album-cover"
            src={props.artistImage}
            alt={props.artistName}
          />
        </a>
        <div className='icons'>
          <img src='icons/heart.svg'/>
          <a
            href={props.playLink}
            target="_blank">
            <img
              className='play-btn grow'
              src='icons/play.svg'/>
          </a>
          <img src='icons/dots.svg'/>
        </div>
      </div>
    </>
  );
}

export default Covers