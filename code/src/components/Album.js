import React from 'react';

export const Album = (props) => {



return (
  <div className="album">
    <img src={props.image} alt="Album cover"/>
    <p> {props.name} </p>
    <p> {props.artists} </p>
  </div>
  )
};

export default Album;