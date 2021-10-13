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
            <>
              <Album
                key={item.id}
                img={item.images[0].url}
                title={item.name}
                albumLink={item.external_urls.spotify}
              />

              {item.artists.map((artistNames) => {
                return (
                  <Artist
                    artistName={artistNames.name}
                    artistLink={artistNames.external_urls.spotify}
                  />
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
};

{
  /* {(artists = items.artists.map((artist) => {
          return 
        }))} */
}
// artistName={item.artists.map((artistNames) => {
//   return artistNames.name;
// })}
// musicLink={item.artists[0].external_url}
