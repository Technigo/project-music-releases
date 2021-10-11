import React from "react";
import data from "./data.json";
import { Header } from "./components/Header";
import { Albumcard } from "./components/Albumcard";
import { Footer } from "./components/Footer";
// import { Overlay } from "./components/Overlay";

console.log(data);

export const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      {data.albums.items.map((item) => {
        return <Albumcard image={item.images[1].url} name={item.name} artist={item.artists[0].name} key={item.id} />;
      })}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
