import React from 'react';

const Artists = (props) => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer"
      className="link link__artists">
      {props.name}
    </a>
  );
};

export default Artists;
