import React from "react";
import data from "./data.json";
import Album from "./components/Album";
import Header from "./components/Header";

export const App = () => {
  return (
    <div>
      <Header />
      <section className="grid-container">
        {data.albums.items.map((item) => {
          return (
            <Album
              key={item.id}
              image={item.images[1].url}
              albumLink={item.external_urls.spotify}
              title={item.name}
              // Maps the artist and give us the name as a link to spotify to each artist
              singer={item.artists.map((artist) => (
                <a key={artist.id} href={artist.external_urls.spotify}>
                  <span className>{artist.name}&nbsp;</span>
                </a>
              ))}
            />
          );
        })}
      </section>
    </div>
  );
};

export default App;
