import React from 'react';
import Buttons from './Buttons/Buttons.js';

import './CoverImage.css';

const imageIndex = 0;

const CoverImage = (props) => {
  return (
    <>
      <div className="cover-image">
        <img src={props.itemCoverImage.images[imageIndex].url} alt={props.itemCoverImage.name} />;
      </div>

      <div className="button-section">
        <Buttons />
      </div>
    </>
  );
};

export default CoverImage;