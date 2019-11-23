import React from "react";
import data from "./data.json";
import { Album } from "components/Album";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import './app.css';


// import { Artist } from "./Artist";

console.log(data.albums.items);

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="albumSection">
        {data.albums.items.map((item) => (
          <Album
            key={item.id} item={item}
          />
        ))}</div>
      <Footer />
    </div>

  )
}
