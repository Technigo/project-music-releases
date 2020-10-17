import React from "react";
import data from "./data.json";
import "./app.css";
import { Header } from "./components/Header";
import { AlbumContainer } from "./components/AlbumContainer";
import { AlbumCard } from "./components/AlbumCard";

console.log(data);

export const App = () => {
  return (
    <div className="AlbumContainer">
      <Header />
      <AlbumContainer albums={data.albums.items} />
    </div>
  );
};
