import React from 'react';
import data from './data.json';
<<<<<<< HEAD
import Header from './components/Header';
import Album from './components/Album';
=======
import Header from "./components/Header/Header";
import Album from "./components/Album";
>>>>>>> 03e6e97a418cda799d6d58f9d36734c38af1ad81

console.log(data);

const App = () => {
  return (
    <div>
      <Header title="Spotify stuff" />
      <Album mapdata={data} />
    </div>
  );
}

export default App;