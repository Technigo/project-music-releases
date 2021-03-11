import React from 'react';

export const Album = (props) => {

return (
  <div className="album-card">
    
    <div className="album-cover">
      <img className="album-image" src={props.image} alt="Album cover"/>
    
    <div className="icons">
      <img className="heart" src={require("../images/heart.svg")} alt="like icon"/>
      <a href={props.albumURL}><img className="play" src={require("../images/play.svg")} alt="play icon"/></a>
      
      <img className="dots" src={require("../images/dots.svg")} alt="menu icon"/>
    </div>
    </div>
    <a href={props.albumURL}><p className="album-title"> {props.name} </p></a>
    <a href={props.artistURL}><p className="album-artist"> {props.artists} </p></a>
  </div>
  )
};

export default Album;