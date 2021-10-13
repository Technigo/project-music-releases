import React from "react";
import data from "./data.json";
import Artist from "./components/Artist";

//console.log(data);
const items = data.albums.items;
const artists = data.albums.items;
console.log(artists);

export const App = () => {
  return (
    <>
      <div className="header">New albums & singels</div>
      <div className="article-container">
        {items.map((item) => {
          return (
            <Artist
              key={item.name}
              img={item.images[0].url}
              title={item.name}
              artistName={item.artists.map((artistNames) => {
                return artistNames.name;
              })}
              musicLink={item.artists[0].external_url}
            />
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
