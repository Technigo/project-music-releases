import React from "react";
import data from "./data.json";
import "./app.css";
import { Header } from "./components/Header";
import { Album } from "./components/Album";

export const App = () => {
  return (
    <div className="app">
      < Header />
      <div className="appData">
        {data.albums.items.map(item => {
          return (
            <Album key={item.id} item={item} />
          )
        })}
      </div>
    </div>


  );
};

