import React from "react";
import data from "./data.json";

import { AlbumCard } from "./components/AlbumCard";

// import AlbumCard
// import Header

console.log(data);

export const App = () => {
  return (
    <div className="App">
      <AlbumCard />
      Find me in src/app.js!
    </div>
  );
};
