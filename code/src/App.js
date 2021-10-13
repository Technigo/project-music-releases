import React from "react";
import data from "./data.json";
import Article from "./components/Article";

console.log(data.albums.items[0].artists[0].name);

export const App = () => {
  return (
    <>
      <h1>New Albums & Singles</h1>
      <div className="grid">
        <Article
          img={data.albums.items[0].images[1].url}
          title={data.albums.items[0].name}
          band={data.albums.items[0].artists[0].name}
        />

        <Article
          img="https://via.placeholder.com/150x150"
          title="Another Album!"
          band="random band name 2"
        />

        <Article
          img="https://via.placeholder.com/150x150"
          title="wow a third album!"
          band="random band name 3"
        />

        <Article
          img="https://via.placeholder.com/150x150"
          title="sooo much music!"
          band="random band name 4"
        />

        <Article
          img="https://via.placeholder.com/150x150"
          title="It never ends!"
          band="random band name 5"
        />

        <Article
          img="https://via.placeholder.com/150x150"
          title="OK a 6:th album!"
          band="random band name 6"
        />
      </div>
    </>
  );
};
