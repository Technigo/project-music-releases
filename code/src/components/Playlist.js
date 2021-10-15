import React from "react";
import thePlayLists from "../stretch-goal.json";

const Playlist = () => {
  const listArray = thePlayLists.playlists.items;

  return (
    <section className="playlists-wrapper">
      <h2 className="playlist-h2">Top playlists</h2>
      {listArray.map((playlist) => {
        return (
          <div key={playlist.id} className="playlist-box">
            <div className="playlist-image">
              <a
                href={playlist.external_urls.spotify}
                className="img-link"
                title="play"
              >
                <img
                  className="image-playlists"
                  src={playlist.images[0].url}
                  alt="list cover"
                />
              </a>
            </div>
            <a href={playlist.external_urls.spotify} className="playlist-link">
              {playlist.name}{" "}
            </a>
          </div>
        );
      })}
    </section>
  );
};
export default Playlist;
