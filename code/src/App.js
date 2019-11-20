import React from "react";
import data from "./data.json";
import { Album } from "./Album"


console.log(data.albums.items);

export const App = () => {
  return (
    <div>
      <h1>ALBUMS</h1>
      {<Album />}
    </div>
  );
};
