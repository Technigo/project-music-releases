import React from "react";

const Artists = (props) => {
  return (
    <div>
      <h3 className="song-artists">
        {/*<a href={props.item.artists.external_urls.spotify}></a>*/}
        {props.artistArray.map((artist) => artist.name)}
      </h3>
    </div>
  );
};

export default Artists;
