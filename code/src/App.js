import React from "react";
import data from "./data.json";

import Album from "./components/Album";

console.log(data);

const App = () => {
  return (
    <>
      {data.albums.items.map((props) => {
        return <Album key={data.id} data={props} />;
      })}
    </>
  );
};

export default App;
