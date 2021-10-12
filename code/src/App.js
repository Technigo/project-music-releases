import React from "react";
import data from "./data.json";

//Named export
// import { Article } from "./components/Article";

// when using Default export
// import Article from "./components/Article";
import Cover from "./components/Cover";
import Artist from "./components/Artist";
import Album from "./components/Album";

console.log(data);

export const App = () => {
  return (
    //if more divs, use React Fragment <>
    <div className="App">
      {data.albums.items.map((props) => {
        return (
          <>
            <div className="" key={props.cover}>
              <Cover key={props.href} item={props} />
            </div>

            <div className="" key={props.album}>
              <Album key={props.title} item={props} />
            </div>

            <div className="" key={props.artist}>
              <Artist key={props.name} item={props} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default App;
