import React from "react";
import data from "./data.json";
import Album from "./components/Album";

// console.log(data);
const AlbumArray = data.albums.items;
console.log(AlbumArray);

export const App = () => {
  return (
    <div className="albums-wrapper">
      {AlbumArray.map((album) => {
        return (
          <Album
            image={album.images[1].url}
            title={album.name}
            titleLink={album.external_urls.spotify}
            artist={album.artists.map((artist, index) => {
              
              const numberOfArtists = album.artists.length

              if (numberOfArtists === index + 1 && numberOfArtists !== 1) {
                return <a> & {artist.name}</a>
              } else if (numberOfArtists === index + 2 && index !== 0) {
                return <a>, {artist.name}</a>
              } else {
                return <a>{artist.name}</a>
              }
            }
            )}
            artistlink={album.artists.map(
              (artist) => artist.external_urls.spotify
            )}
          />
        );
      })}
    </div>
  );
};
