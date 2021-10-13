import React from "react";
import data from "./data.json";

//Named export
// import { Article } from "./components/Article";

// when using Default export
// import Article from "./components/Article";
import Cover from "./components/Cover";
import Artist from "./components/Artist";
import Album from "./components/Album";
import Header from "components/Header";

console.log(data);

export const App = () => {
  return (
    /*app-container är allt */
    <div className="app-section">
      <Header />
      {data.albums.items.map((element) => {
        return (
          <>
            <div className="app-container">
              <Cover key={element.href} item={element} />

              <Album key={element.title} item={element} />

              <Artist key={element.artist} item={element} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default App;
