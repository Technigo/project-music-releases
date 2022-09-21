import React from "react";

import Images from "./Images";
import AlbumTitle from "./AlbumTitle";
import Artist from "./Artist";

const Album = (props) => {
  console.log(props.data);
  return (
    <>
      <div className="album-card">
        <Images albumImage={props.data.images[1].url} />
        <AlbumTitle albumTitle={props.data.name} />
        <Artist artistName={props.data.artists[0].name} />
      </div>
    </>
  );
};

export default Album;
