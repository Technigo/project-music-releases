import React from 'react';

const Album = (props) => {
  console.log(props);

  return (
    <article className="album">
      <img src={props.url} alt="Album cover" />
      <h2>{props.title}</h2>
      <p>{props.artist}</p>
    </article>
  )
}

export default Album