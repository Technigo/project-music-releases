import React from "react";

const DescriptionContainer = props => {
  return (
    <article className="album-text-container">
      <h2 className="album-title">
        <a target="_blank" rel="noopener noreferrer" href={props.hrefAlbum}>
          {props.title}
        </a>
      </h2>
      <p className="artists">
        {props.singer.map(artists => (
          <a
            key={artists.id}
            target="_blank"
            rel="noopener noreferrer"
            href={artists.external_urls.spotify}
          >
            <span>{artists.name}</span>
          </a>
        ))}
      </p>
    </article>
  );
};

export default DescriptionContainer;
