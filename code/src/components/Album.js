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
          <Artist
            artistName={props.data.artists[0].name}
            artistLink={props.data.artists[0].external_urls.spotify}
          />
        </div>
        {/* <div className="artist-container">
       {props.articleDetails.artists.map((eachartist) => {
       return <a href={eachartist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="artist" key={eachartist.id} >{eachartist.name} </a>
     })}</div> */}
      </article>
    </>
  );
};

export default Album;
