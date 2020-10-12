import React from 'react';
import data from './data.json';

const filterImages = data => {
  const filteredImages = data.albums.items.map((item) => {
    const big = item.images[0].url;
    const medium = item.images[1].url;
    const small = item.images[2].url;
    return { big, medium, small }
  });
  return filteredImages
}

const Image = () => {
  filterImages(data);
  return (
    <picture>
      <source srcSet="" media="(min-width: 1024px)" />
      <source srcSet="" media="(min-width: 768px)" />
      <img src="" alt="" />
    </picture>
  );
};
/*Save images in different varaibles, big for 640px, medium 300px and small 64px */
export default Image;
