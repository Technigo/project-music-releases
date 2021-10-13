import React from "react";

const Artists = ({ props }) => (
  <>
    <div>
      <h2 className="song-title">
        {/*<a href={props.item.external_urls[0].spotify}></a>*/}
        {props.item.name}
      </h2>
      <h3 className="song-artists">
        {/*<a href={props.item.artists.external_urls.spotify}></a>*/}
        {props.item.artists.name}
      </h3>
    </div>
  </>;
)


export default Artists;
