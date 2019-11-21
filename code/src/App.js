import React from "react";
import data from "./data.json";
import { Album } from "./Album";
// import { Artist } from "./Artist";



console.log(data.albums.items);

export const App = () => {
  return (
    <div className="App">
      {data.albums.items.map((album) => (
        <Album
          key={album.id}
          linkalbum={album.uri}
          image={album.images[1].url}
          albumname={album.name}
          linkartist={album.artists[0].uri}
          artistname={album.artists[0].name} />
      ))}
    </div>
  )
}
