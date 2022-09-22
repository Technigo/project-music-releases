import React from "react";
// import Album Cover
import { AlbumCover } from "./AlbumCover";
import { AlbumArtist } from "./AlbumArtist";

// import Album Artist

//export const AlbumCard = (props)

export const AlbumCard = (props) => {
  return (
    <section className="card-container">
      {props.coverImg.map((CoverImg) => (
        <AlbumCover
          //  Key ?
          url={CoverImg[1].url}
        />
      ))}

      <a className="album-title" href={props.albumUrl} target="_blank" rel="#">
        {props.title}
      </a>

      <div className="album-artist-container">
        {props.artist.map((artist) => (
          <AlbumArtist
            key={artist.id}
            artistName={artist.name}
            artistUrl={artist.external_urls.spotify}
          />
        ))}
      </div>
    </section>
  );
};
