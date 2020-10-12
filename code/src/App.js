import React from "react";
import data from "./data.json";
import "./app.css";
import Header from "./components/Header";
import Album from "./components/Album";

console.log(data);

const App = () => {
  return (
    <section>
      <Header />
      < Album />
    </section>
  );
};

export default App;

// const albumContainer = () => {
//   return (
//     <div>
//       {data.map((data) => (
//         <div>
//           <img src={items.images[1].url} alt="album cover" class="albumCover" />
//           <a href={items.external_urls.spotify} class="title"></a>
//           <a class="artist" href={items.artists[0].external_urls.spotify}></a>
//         </div>
//       ))}
//     </div>
//   );
// };
