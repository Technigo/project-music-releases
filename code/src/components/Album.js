import React from 'react';

export const Album = (props) => {

return (
  <div className="album-card">
    <img className="album-image" src={props.image} alt="Album cover"/>
    <p className="album-title"> {props.name} </p>
    <p className="album-artist"> {props.artists} </p>
  </div>
  )
};

export default Album;