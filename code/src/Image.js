import React from 'react';

const Image = (props) => {
  // console.log(props);
  return (
    <div>
      <img className="image" src={props.image} alt="Cover of the Album"/>
      <div className="icon-container">
        <img 
          src="../public/icons/heart.svg"
          height="30"
          width="30"
          alt="heart"
        />
      </div>
    </div>
    )
  }

export default Image;