import React from "react";
import data from "./data.json";
import { Header } from "./components/Header";
import { Album } from "./components/Album";
import "./app.css";

const albumArray = data.albums.items;

export const App = () => {
  return (
    <>
      <Header headerText="New albums &amp; singles" />
      <section className="album-list">
        {albumArray.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </section>
    </>
  );
};
