import React from "react";
import data from "./data.json";
import Album from "./Album/Album";
import "./app.css";
import Header from "./Header.js";

console.log(data);

export const App = () => {
  return (
    <div className="content">
      <div className="header">
        <Header />
      </div>
      <div className="albumList">
        {data.albums.items.map(item => (
          <Album
            key={item.id}
            item={item}
            albumURL={item.external_urls.spotify}
            artists={item.artists[0].name}
            artistURL={item.artists[0].external_urls.spotify}
          />
        ))}
      </div>
    </div>
  );
};
