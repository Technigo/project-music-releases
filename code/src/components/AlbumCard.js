/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
import React from "react";
import ArtistName from "./ArtistName";
import AlbumName from "./AlbumName";
import Icons from "./Icons";

const AlbumCard = ({ album }) => {
  console.log('album:')
  console.log(album)
  return (

    <section className="album-card">
      <div className="album-container">
        <img
          src={album.images[1].url}
          className="cover-img"
          alt={album.name}
        />
        <div className="hidden-icons">
          <h2>
            <Icons />
          </h2>
        </div>
      </div>
      
      <AlbumName title={album.name} />
      <ArtistName artists={album.artists} />
    </section>
  );
};

export default AlbumCard;
