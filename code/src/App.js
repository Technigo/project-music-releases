import React from "react";
import data from "./data.json";
import Album from "./components/Album";
// import Artist from "./components/Artist";

// console.log(data);
const AlbumArray = data.albums.items;
console.log(AlbumArray);
// const album = data.map(data.album.items);

export const App = () => {
  return (
    <div className="albums-wrapper">
      {AlbumArray.map((album) => {
        return (
          <Album
            img={album.images[1].url}
            name={album.name}
            // artists={album.artists.map((artist) => {
            //   //   console.log(artist);
            //   return artist.name;
            // })}
          />
        );
      })}
    </div>
  );
};

// export const App = () => {
//   return (
//     <Album
//       img={data.albums.items[0].images[1].url}
//       name={data.albums.items[0].name}
//       artists={data.albums.items[0].artists[0].name}
//     />
//   );
// };

// const App = ()=> {
// 	return (
// 		<div>
// 			{people.map(person => {
// 				return (
// 					<Person key{person.name} name={person.name} title={person.title} />
// 				)
// 			})}
// 		</div>
// 	)
// }
