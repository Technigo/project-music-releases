import React from "react";

const DescriptionContainer = props => {
  return (
    <article className="album-text-container">
      <h2 className="album-title">
        <a href={props.hrefAlbum}>{props.title}</a>
      </h2>
      <p className="artists">
        {props.singer.map((artists, pos) => (
          <a key={pos} href={artists.external_urls.spotify}>
            {artists.name}
          </a>
        ))}
      </p>
    </article>
  );
};

export default DescriptionContainer;
