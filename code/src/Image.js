import React from 'react';
import Icons from './Icons';
import './image.css';

const Image = props => {
  return (
    <div className="image__container">
      <div className="overlay"></div>
      <Icons />
      <picture>
        <source srcSet={props.imageBig} media="(min-width: 1024px)" />
        <img className="image" src={props.imageSmall} alt="Album cover" />
      </picture>
    </div>
  );
};

export default Image;

/* const Image = props => {
  return (
    <picture className="album-cover">
      <source srcSet={props.item.images[0].url} media="(min-width: 1024px)" />
      <source srcSet={props.item.images[1].url} media="(min-width: 768px)" />
      <img src={props.item.images[2].url} alt="Album cover" />
    </picture>
  );
}; */
