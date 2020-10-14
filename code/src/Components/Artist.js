import React from 'react';

// console.log(data)

const Artist = (props) => {
  return (
    <a href={props.url}>
      <p className="artist-name">{props.names}</p>
    </a>
)}

export default Artist