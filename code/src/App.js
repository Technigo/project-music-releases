import React from "react";

import Header from "./components/Header";
import data from "./data.json";
import Album from "./components/Album";

export const App = () => {
  return (
    <div>
      <Header />
       <div className="album-wrapper">
      {data.albums.items.map((album =>
        <Album key={album.id} albums={album} />
      ))}
      </div>
    </div>
  )
}
