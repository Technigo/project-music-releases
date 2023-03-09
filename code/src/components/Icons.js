import React from 'react';
import './ImageList.css';

const Icons = ({ imageArray }) => {
  return (
    <div> {imageArray.map((potato) => {
      return (
        <div className="image-container">
          <span className="icon" />
          <img className="image" alt="single album" src={potato.url} />
        </div>
      )
    })}
    </div>)
}
export default Icons;

