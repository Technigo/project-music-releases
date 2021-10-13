import React from "react";

const Album = (props) => {
  // console.log('PROPS', props);

  return (
    <article className="album-banana">
      <img src={props.albumimage} alt="Cover of album" />
      <h1>{props.songtitle}</h1>
    </article>
  );
};

export default Album;
