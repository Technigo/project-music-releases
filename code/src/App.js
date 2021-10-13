import React from "react";
import data from "./data.json";
import { Header } from "./components/Header";
import { Albumcard } from "./components/Albumcard";
import { Footer } from "./components/Footer";
// import { Overlay } from "./components/Overlay";

console.log(data);

export const App = () => {
  const albumArray = data.albums.items;
  return (
    <div>
      <header>
        <Header />
      </header>

      {albumArray.map((album) => {
        return <Albumcard 
        key={album.id}
        image={album.images[0].url} 
        name={album.name} 
        hrefAlbum={album.external_urls.spotify} 
        artists={album.artists.map((item, index) => <a>{item.name}</a>)} 
        hrefArtists={album.artists.map((item)=> item.external_urls.spotify)} 
        />;
      })}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
