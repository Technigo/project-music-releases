import React from 'react';

export const Album = (props) => {

return (
  <div className="album-card">
    
    <div className="album-cover">
      <img className="album-image" src={props.image} alt="Album cover"/>
    
    <div className="icons">
      <img className="heart" src={require("../images/heart.svg")} alt="like icon"/>
      <img className="play" src={require("../images/play.svg")} alt="play icon"/>
      <img className="dots" src={require("../images/dots.svg")} alt="menu icon"/>
    </div>
    </div>
    <p className="album-title"> {props.name} </p>
    <p className="album-artist"> {props.artists} </p>
  </div>
  )
};

export default Album;