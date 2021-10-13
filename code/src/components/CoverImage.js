import React from 'react';

export const CoverImage = (props) => {
  return (
    <>
      <div className='image-container'>
        <img src={props.image} alt='album cover' className='cover-image' />;
        <div className='overlay'>
          <div className='icon-container'>
            <img src='./icons/heart.svg' width='20' height='20' />
            <img src='./icons/play.svg' width='50' height='50' />
            <img src='./icons/dots.svg' width='20' height='20' />
          </div>
        </div>
      </div>
    </>
  );
};
