import React from "react";

export const Article = (props) => {
    return (
    <article className="album">
      <img src="https://www.placecage.com/328/328" alt="album cover"/>
      <p className="title">{props.type}</p>
      <p className="artist">{props.artist}</p>
    </article>
    )
}