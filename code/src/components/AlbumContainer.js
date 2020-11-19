import React from "react";
import { AlbumCard } from "./AlbumCard";


export const AlbumContainer = (props) => {
  const { albums } = props;
 

  return (
    <article className="album-container">
      {albums.map((album) => {
        return (
          <AlbumCard
            key={album.id}
            title={album.name}
            artists={album.artists}
            image={album.images[1].url}
            albumLink={album.external_urls.spotify}
          />
        );
      })}
    </article>
  );
};
