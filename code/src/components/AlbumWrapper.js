import React from "react";
import MusicCard from "./MusicCard";
import data from "../data.json";

const AlbumWrapper = () => {
  const allAlbums = data.albums.items.map((record) => {
    return <MusicCard key={record.id} recordData={record} />;
  });
  return (
    <section>
      <h2>New albums and singles</h2>
      <div className="albumContainer">{allAlbums}</div>
    </section>
  );
};

export default AlbumWrapper;
