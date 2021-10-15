import React from "react";

const Artist = (props) => {
  return (
    <div className="artistBanana">
      {props.item.artists.map((artist, i) => {
        let divider = " ";
        if (i < props.item.artists.length - 2) {
          divider = ", ";
        } else if (i === props.item.artists.length - 2) {
          divider = " & ";
        }
        return (
          <span className="artistNameLink" key={artist.id}>
            <a href={artist.external_urls.spotify}>{artist.name}</a>
            {divider}
          </span>
        );
      })}
    </div>
  );
};

export default Artist;
