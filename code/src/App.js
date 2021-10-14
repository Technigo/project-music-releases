import React from "react";
import data from "./data.json";
import Album from "./components/Album";
import data2 from "./stretch-goal.json";
import Playlist from "./components/Playlist";

console.log(data2);
const AlbumArray = data.albums.items;
console.log(AlbumArray);
const PlaylistArray = data2.playlists.items;
console.log(PlaylistArray);

const arraySinglesOnly = AlbumArray.filter((x) =>
  x.album_type.includes("single")
);

const arrayAlbumsOnly = AlbumArray.filter((x) =>
  x.album_type.includes("album")
);

export const App = () => {
  return (
    <>
      <div className="title-wrapper">
        <h1>New albums</h1>

        <div className="albums-wrapper">
          {arrayAlbumsOnly.map((album) => {
            return (
              <Album
                key={album.id}
                image={album.images[1].url}
                title={album.name}
                titleLink={album.external_urls.spotify}
                artist={album.artists}
              />
            );
          })}
        </div>
        <h1>New singles</h1>

        <div className="albums-wrapper">
          {arraySinglesOnly.map((album) => {
            // const numberOfArtists = album.artists.length

            return (
              <Album
                key={album.id}
                image={album.images[1].url}
                title={album.name}
                titleLink={album.external_urls.spotify}
                artist={album.artists}
              />
            );
          })}
        </div>
      </div>

      <div className="sidebar">
        <h1>{data2.message}</h1>

        <div>
          {PlaylistArray.map((playlist) => {
            return (
              <Playlist
                key={playlist.id}
                image={playlist.images[0].url}
                trackUrl={playlist.external_urls.spotify}
                track={playlist.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
