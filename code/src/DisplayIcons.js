import React from 'react';
import { ReactComponent as HeartIcon } from './icons/heart.svg';
import { ReactComponent as PlayIcon } from './icons/play.svg';
import { ReactComponent as DotsIcon } from './icons/dots.svg';

export const DisplayIcons = () => {
  return (
    <>
      <section className="album-actions">
        <div className="album-actions-inner">
          <div className="album-actions-icon">
            < HeartIcon />
          </div>
          <div className="album-actions-icon -play">
            <PlayIcon />
          </div>
          <div className="album-actions-icon">
            <DotsIcon />
          </div>
        </div>
      </section>
    </>
  )
};

