import React from "react";
import data from "./data.json";
import Album from "./components/Album";
import Header from "./components/Header";

console.log(data);

export const App = () => {
  return (
    <div>
      <Header />

      <section className="grid-container">
        {data.albums.items.map((item) => {
          console.log("TESTING", item.artists);
          return (
            <Album
              image={item.images[1].url}
              albumLink={item.external_urls.spotify}
              title={item.name}
              {item.artists.map((artist) => {
                console.log("SNÄLLA", artist)
              })}
              //   return (
              //   singer={artist.name}
              //   artistLink={artist.external_urls.spotify}
              //   )
              // })}
            />
          );
        })}
      </section>
    </div>
  );
};

export default App;

{
}

// <div>
//   {musicJson.albums.items.map((album) => (
//     <div key={album.id}>
//       <h1>{album.name}</h1>
//       <p className="artists">{album.artists.map((artist) => (
//         <a href="urrl from json">
//           <span key={artist.id}>{artist.name}</span>
//         </a>
//       ))}
//       </p>
//     </div>
//   ))}
// </div>
