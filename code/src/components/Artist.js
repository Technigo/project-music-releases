import React from "react";

const Artist = (props) => {
  return (
    <div className="artist">
      {props.item.artists.map((artist) => {
        return (
          <a key={artist.id} href={artist.external_urls.spotify}>
            <h2>{artist.name}, </h2>
          </a>
        );
      })}
    </div>
    //Saknas: KOMMATECKEN
  );
};

export default Artist;
