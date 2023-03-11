import React from 'react';
import { Buttons } from './Buttons/Buttons.js';

import './CoverImage.css';

const imageIndex = 0;

export const CoverImage = (props) => {
  return (
    <div className="cover-image-wrapper">
      <img
        src={props.singleCoverItem.images[imageIndex].url}
        alt={props.singleCoverItem.name} />
      <Buttons />
    </div>
  );
};