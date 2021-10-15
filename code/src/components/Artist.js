import React from "react";

const Artist = (props) => {
  return (
    <div className="artist-banana">
      {props.item.artists.map((artist, i) => {
        let divider = " ";
        if (i < props.item.artists.length - 2) {
          divider = ", ";
        } else if (i === props.item.artists.length - 2) {
          divider = " & ";
        }
        return (
          <span className="artist-name-link" key={artist.id}>
            <a href={artist.external_urls.spotify}>{artist.name}</a>
            {divider}
          </span>
        );
      })}
    </div>
  );
};

export default Artist;
