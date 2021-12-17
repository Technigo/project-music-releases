import React from "react";
import Artists from "./Artists";
import Icons from "./Icons";

export const Album = (props) => {
  return (
    <article className="album-card">
      <section className="cover">
        <div className="album-image-container">
          <Icons albumLink={props.albumLink} />
          <img
            src={props.img}
            className="album-cover"
            alt={props.albumTitle}
          />
        </div>

        <a
          href={props.albumLink}
          target="_blank"
          rel="noopener noreferrer"
          className="album-title-link"
        >
          <h2 className="album-title">{props.title}</h2>
        </a>

        <Artists artists={props.artists} />
      </section>
    </article>
  );
};

export default Album;
