import React from "react";
import data from "./data.json";
import playlistData from "./stretch-goal.json";
import Album from "./components/Album";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Playlist from "./components/Playlist";

console.log(data);
console.log(playlistData);

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
                  <span>{artist.name}</span>
                </a>
              ))}
            />
          );
        })}
      </section>

      <aside className="playlist-container">
        <header className="playlist-header">
          <h2>Playlists - Editor's picks</h2>
        </header>
        {playlistData.playlists.items.map((playlist) => {
          return (
            <Playlist
              key={playlist.id}
              cover={playlist.images[0].url}
              playlistName={playlist.name}
              playlistUrl={playlist.external_urls.spotify}
              trackNumber={playlist.tracks.total}
            />
          );
        })}
      </aside>
      <Footer />
    </div>
  );
};

export default App;
