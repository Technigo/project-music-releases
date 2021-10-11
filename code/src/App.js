import React from "react";
import data from "./data.json";
import Artist from "./components/Artist";

//console.log(data);

export const App = ({ numberOfItems = 8 } = {}) => {
  const items = data.albums.items.slice(0, numberOfItems - 1);
  console.log(items);
  return (
    <>
      <div className="article-container">
        {items.map((item) => {
          return (
            <Artist
              img={item.images[0].url}
              title={item.name}
              description={item.artists[0].name}
            />
          );
        })}
      </div>
    </>
  );
};
