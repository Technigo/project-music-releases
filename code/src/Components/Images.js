/* eslint-disable no-lone-blocks */
import React from 'react'

// This is the Images component //
const Images = (props) => {
  console.log(props);
  return (
    <>
      <div className="image-container">
        {props.images.map((singleimage) => <img src={singleimage.url} alt="album cover" />)}
      </div>
      <div className="icons-container">
        <a href={props.album.external_urls.spotify}>
          <img className="heart" src="./icons/heart.svg" alt="heart icon" />
          <img className="play" src="./icons/play.svg" alt="play icon" />
          <img className="dots" src="./icons/dots.svg" alt="dots icon" />
        </a>
      </div>
    </>
  )
}

// Our Images function is avalible to all the other codes that we´ll write //
export default Images;
