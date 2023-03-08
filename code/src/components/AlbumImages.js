import React from 'react';

export const AlbumImages = (props) => {
  return (
    <picture>
      <source media="(min-width:1200px)" srcSet={props.imagesInput[0].url} />
      <source media="(min-width:600px)" srcSet={props.imagesInput[1].url} />
      <source media="(max-width:599px)" srcSet={props.imagesInput[2].url} />
      <img src={props.imagesInput[1].url} alt="album cover" />
    </picture>
  )
}