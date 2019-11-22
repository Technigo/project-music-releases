import React from "react";

import { Artist } from "./Components/Artist/Artist";
import { Album } from "./Components/Album/Album";

import data from "./data.json";

const renderArtist = artist => {
  const { id, name, external_urls } = artist;
  return <Artist key={id} name={name} url={external_urls.spotify} />;
};

const renderAlbum = album => {
  const { id, images, name, external_urls } = album;
  return (
    <div key={id} className="album_artist_container">
      <Album image={images[1].url} name={name} url={external_urls.spotify} />
      {album.artists.map(renderArtist)}
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <h1>New albums & singles</h1>
      <div className="flex-container">{data.albums.items.map(renderAlbum)}</div>
    </div>
  );
};
