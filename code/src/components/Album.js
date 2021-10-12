import React from "react";
import Artists from "./Artists";

const Album = (props) => {
  return (
    <article className="album-card">
      <img src={props.item.images[0].url} alt="#" />
      <div className="text-wrapper">
        <Artists />
      </div>
    </article>
  );
};

export default Album;

//
