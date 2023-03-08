import React from 'react';

export const AlbumImages = (props) => {
  return (
    <picture className="album-cover-picture">
      <source media="(min-width:998px)" srcSet={props.imagesInput[1].url} />
      <source media="(min-width:600px)" srcSet={props.imagesInput[1].url} />
      <source media="(max-width:599px)" srcSet={props.imagesInput[1].url} />
      <img className="album-cover-image" src={props.imagesInput[1].url} alt="album cover" />
    </picture>
  )
}