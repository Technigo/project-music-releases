import React from "react";

import Images from "./Images";
import AlbumTitle from "./AlbumTitle";
import Artist from "./Artist";

const Album = (props) => {
  console.log(props.data);
  return (
    <>
      <article className="album-card">
        <div>
          <Images albumImage={props.data.images[1].url} />
        </div>
        <div>
          <AlbumTitle
            albumTitle={props.data.name}
            albumLink={props.data.external_urls.spotify}
          />
        </div>
        <div>
          <Artist artistArray={props.data.artists} />
        </div>
      </article>
    </>
  );
};

export default Album;
