import React from "react";
import data from "./data.json";
import Album from "./components/Album";
import Artist from "./components/Artist";

const items = data.albums.items;

export const App = () => {
  return (
    <div>
      <header className="header">
        <h1>New albums & singels</h1>
      </header>
      <div className="album-wrapper">
        {items.map((item) => {
          return (
            <div className="album-box" key={item.id}>
              <Album
                img={item.images[1].url}
                title={item.name}
                albumLink={item.external_urls.spotify}
              />
              <div className="artist-box">
                {item.artists.map((artistNames) => {
                  return (
                    <Artist
                      key={artistNames.id}
                      artistName={artistNames.name}
                      artistLink={artistNames.external_urls.spotify}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
