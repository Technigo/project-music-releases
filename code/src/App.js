import React from "react";
import data from "./data.json";
import { Album } from "./Album.js";

console.log(data);

export const App = () => {
  return (
    <article>
      <h1>New albums & singles</h1>
      <div>
        <Album className="music-card" />
      </div>
    </article>
  );
};

export default App;
