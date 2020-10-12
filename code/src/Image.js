import React from 'react';
import data from './data.json';

const filteredImages = filter(data.json);
console.log(filteredImages);

export const Image = () => {
  return (
    <picture>
      <source srcset="" media="(min-width: 1024px)" />
      <source srcset="" media="(min-width: 768px)" />
      <img src="" alt="" />
    </picture>
  );
};
