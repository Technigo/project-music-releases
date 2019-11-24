import React from 'react'

export const AlbumCover = (props) => {
  return (
    <div className="album-cover">
      <img srcSet={
        `${props.imageMedium} ${props.imageMediumSize}w,
          ${props.imageLarge} ${props.imageLargeSize}w`
      }
        sizes={
          `(max-width: 1024px) ${props.imageMediumSize},
            (min-width: 1024px) ${props.imageLargeSize}`
        }
        src={`${props.imageMedium}`} alt="" className="album-cover-image" />
      {props.children}
    </div>
  )
}