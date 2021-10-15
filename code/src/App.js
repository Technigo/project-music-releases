import React from "react";
import data from "./data.json";
import Artist from "./components/Artist";
import Album from "./components/Album";
import Header from "./components/Header";

//console.log(data);
const items = data.albums.items;
// const artists = data.albums.items;

export const App = () => {
  return (
    <>
      <Header />
      <div className="article-container">
        {items.map((item) => {
          return (
            <div className="album-container">
              <Album
                key={item.id}
                img={item.images[0].url}
                title={item.name}
                albumLink={item.external_urls.spotify}
              />
              <div className="artist-container">
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
    </>
  );
};
