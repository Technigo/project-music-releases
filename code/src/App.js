import React from "react";
import data from "./data.json";

import { Album } from "./components/Album";
// import { Artist } from "./components/Artist";

console.log(data);

export const App = () => {
  return (
    <section>
      <Album />
    </section>
  );
};
