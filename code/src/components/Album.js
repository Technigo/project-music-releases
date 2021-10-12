import React from "react";
import Artist from "./Artist";
import CoverAlbum from "./CoverAlbum";
import SongTitle from "./SongTitle";

const Album = ({ image, title, titleLink, artist, artistlink }) => {
  return (
    <div className="album-wrapper">
      <div className="album">
        <CoverAlbum image={image} />
        <SongTitle titleLink={titleLink} title={title} />
        <Artist artistLink={artistlink} artist={artist} />
      </div>
    </div>
  );
};

export default Album;
