import React from 'react';

const Image = props => {
  return (
    <picture>
      <source srcSet={props.item.images[0].url} media="(min-width: 1024px)" />
      <source srcSet={props.item.images[1].url} media="(min-width: 768px)" />
      <img src={props.item.images[2].url} alt="Album cover" />
    </picture>
  );
};

export default Image;
