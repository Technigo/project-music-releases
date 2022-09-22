/* eslint-disable no-undef */
import React from "react";
import ArtistName from "./ArtistName";
import AlbumName from "./AlbumName";
import Icons from "./Icons";

const AlbumCard = (props) => {
  return (
    <section className="album-card">
      <div className="album-container">
        <img
          src={props.album.images[1].url}
          className="cover-img"
          alt={props.album.name}
        />
        <div className="hidden-icons">
          <h2>
            <Icons />
          </h2>
        </div>
      </div>

      <AlbumName />
      <ArtistName artists={props.album.artists} />
    </section>
  );
};

export default AlbumCard;
