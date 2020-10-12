import React from 'react';
import data from './data.json';



const Image = () => {
  return (
    <picture>
      <source srcSet="imageBig" media="(min-width: 1024px)" />
      <source srcSet="imageMedium" media="(min-width: 768px)" />
      <img src="imageSmall" alt="" />
    </picture>
  );
};

export default Image;
