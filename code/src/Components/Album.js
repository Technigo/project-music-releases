import React from 'react';

const Album  = (props) => {
  return (
  <>
  <a href={props.href} target="_blank">
    <h2 className="albumTitle">{props.title}</h2>
    </a>
    </>
  );
};

export default Album;