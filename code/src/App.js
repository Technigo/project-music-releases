import React from "react";
import data from "./data.json";
import Album from "./components/Album";
import Artist from "./components/Artist";
console.log(data);

console.log(
  data.albums.items.map((names) => {
    return names.images[1].url;
  })
);
console.log(
  data.albums.items.map((names) => {
    return names.name;
  })
);
console.log(
  data.albums.items.map((type) => {
    return type.album_type;
  })
);

console.log(
  data.albums.items.map((names) => {
    return names.artists[0].name;
  })
);
console.log(
  data.albums.items.map((names) => {
    return names.artists[0].id;
  })
);

//sidan till artisten
console.log(
  data.albums.items.map((names) => {
    return names.artists[0].external_urls.spotify;
  })
);
// sidan till låten
console.log(
  data.albums.items.map((names) => {
    return names.external_urls.spotify;
  })
);
const items = data.albums.items;
console.log(items);

export const App = () => {
  return (
    <div>
      <header className="header">
        <h1>New albums & singels</h1>
      </header>
      <div className="album-wrapper">
        {items.map((item) => {
          return (
            <div className="album-box">
              <Album
                key={item.name}
                img={item.images[1].url}
                title={item.name}
                albumLink={item.external_urls.spotify}
              />
              <div className="artist-box">
                {item.artists.map((artistNames) => {
                  return (
                    <Artist
                      key={artistNames.id}
                      artistName={artistNames.name}
                      artistLink={artistNames.external_urls.spotify}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
