import React from "react";
import MusicCard from "./MusicCard";
import data from "../data.json";

const AlbumWrapper = () => {
  console.log(data.albums.items);
  const allAlbums = data.albums.items.map((record) => {
    return <MusicCard key={record.id} recordData={record} />;
  });
  return (
    <section className="header">
      <h2>New albums and singles</h2>
      <div className="album-wrapper">{allAlbums}</div>
    </section>
  );
};

export default AlbumWrapper;
