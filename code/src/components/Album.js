import React from "react";

const Album = (props) => {
  // console.log('PROPS', props);

  return (
    <article className="album-banana">
      <img src={props.albumimage} alt="Cover of album" />
      <a className="album-link" href={props.albumlink}>
        <h1 className="release-name-text">{props.songtitle}</h1>
      </a>
    </article>
  );
};

// <a href={albums.external_urls.spotify}>{artist.name}</a>

export default Album;
