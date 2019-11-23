import React from "react";
import data from "./data.json";
import { Album } from "./Album";
import "./app.css";

console.log(data);

export const App = () => {
  return (
    <div className="content">
      {data.albums.items.map(item => (
        <Album key={item.id} item={item} />
      ))}
    </div>
  );
};
