import React from 'react';
import data from './data.json';
import Header from "./components/Header/Header";
import Album from "./components/Album";

console.log(data);

const App = () => {
  return (
    <div>
      <Header title="Spotify stuff"/>
      <Album mapdata={data} />
    </div>
  );
}

export default App;