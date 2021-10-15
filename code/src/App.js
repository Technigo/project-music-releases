import React from "react";
import data from "./data.json";
import Article from "./components/Article";

console.log(data.albums.items[0]);

export const App = () => {
  return (
    <>
      <h1>New Albums and singles</h1>
      <div class="container">
        {data.albums.items.map((album) => (
          <Article
            title={album.name}
            titleClick={album.external_urls.spotify}
            img={album.images[1].url}
            artist={album.artists.map((item, index) => (
              <a>
                {index ? "," : ""} {item.name}
              </a>
            ))}
          />
        ))}
      </div>
    </>
  );
};

/* 

TODO
1. Overlay (Isabel) -> klart
2. (klar) tre ikonerna (hjärta osv)()
3. (klar) playknappen skall växa när man hovrar över den. 
4. each artists with komma between them (Isabel)
5. fler än två artister - ett & tecken. (Isabel)
6. when clicking on the album, skall man komma till en extern spotify sida.(Hedvig)


7. (klar) when clicking on a artist you should come to an external artist page (Hedvig)
8. (klar) responsive page. (Hedvig)   

*/
