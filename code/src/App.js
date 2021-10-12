import React from "react";
import data from "./data.json";
import { Album } from "./components/Album";

console.log(data);
export const App = () => {
  return (
    <div className="album-wrapper">
      {data.albums.items.map((item) => (
        <Album key={item.id} item={item} />
      ))}
    </div>
  );
};
