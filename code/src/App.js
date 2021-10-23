import React from "react";
import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <Header />
      <div className="album-wrapper">
        {data.albums.items.map((item) => (
          <Album key={item.id} item={item} artist={item.artists} />
        ))}
      </div>
    </>
  );
};
