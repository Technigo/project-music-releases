import React from "react";
import data from "./data.json";
import Article from "./components/Article";

export const App = () => {
  return (
    <>
      <h1>New Albums and singles</h1>
      <div className="container">
        {data.albums.items.map((album) => (
          <Article
            key={album.id}
            title={album.name}
            titleClick={album.external_urls.spotify}
            img={album.images[1].url}
            artist={album.artists.map((item, index) => (
              <a
                key={item.id}
                href={item.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
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

5. fler än två artister - ett & tecken. (Isabel)



8. (klar) responsive page. (Hedvig)   

*/
