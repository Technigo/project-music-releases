import React from 'react';
import Icons from 'Components/Icons';

// Component which includes structure for image, songname and artist
const Album = (props) => {
  return (
    <>
      {/* IMAGE */}
      <div className="image--wrapper">
        {/* Importing icons (within the image-wrapper)
         with visibility set to hidden */}
        <Icons />
        {/* Creating a link that wraps around the img-tags */}
        <a
          className="image-link"
          href={props.albumURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="album--image" src={props.image} alt="album" />
        </a>
      </div>

      {/* NAME */}
      {/* h2 with link within wrapping the album name */}
      <h2 className="album-name">
        <a href={props.albumURL} target="_blank" rel="noopener noreferrer">
          {props.albumName}
        </a>
      </h2>
    </>
  );
};

export default Album;
