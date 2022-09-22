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
        <AlbumTitle
          albumTitle={props.data.name}
          albumLink={props.data.external_urls.spotify}
        />
        <Artist
          artistName={props.data.artists[0].name}
          artistLink={props.data.artists[0].external_urls.spotify}
        />
      </div>
    </>
  );
};

export default Album;
