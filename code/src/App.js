import React from "react";
import data from "./data.json";
import { Header } from "./components/Header";
import { Images } from "./components/Images";
import { Artist } from "./components/Artist";
import { Album } from "./components/Album";

console.log(data.albums.items[0].name)


export const App = () => {
    return ( 
      <div>
        <Header />
        <section className="big-container">
      
          { data.albums.items.map((album) => {
            return (
              <div class="album-card">
                < Images image={album.images[0].url} />
                < Album albumLink={album.external_urls.spotify} albumTitle={album.name} />
                < Artist artistLink={album.external_urls.spotify} artistName={album.artists[0].name} />
              </div>
            )
          })}
        
        </section>
      </div>
    )
}