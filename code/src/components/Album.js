import React from "react";

import Images from "./Images";
import AlbumTitle from "./AlbumTitle";
import Artist from "./Artist";

const Album = (props) => {
  console.log(props.data);
  return (
    <>
      <article className="album-card">
        <Images
          albumImage={props.data.images[1].url}
          albumLink={props.data.external_urls.spotify}
        />
        <AlbumTitle
          albumTitle={props.data.name}
          albumLink={props.data.external_urls.spotify}
        />
        <Artist artistArray={props.data.artists} />
      </article>
    </>
  );
};

export default Album;
