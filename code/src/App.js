import React from "react";
import data from "./data.json";
import { Artist } from "./Components/Artist";
import { Album } from "./Components/Album";

// return data.albums.items.map(album => {
//   album.artists.map(art => {
//     return <Artist name={art.name} />;
//   });
//   return

/* <img src={album.images[0].url} />
<Album key={album.name} name={album.name} />; */

// });

// return (
//   <div>
//     <AlbumList albums={albums} />
//   </div>
// );

// return data.albums.items.map(album => {
//   return (
//     <div>
//       <img src={album.images[0].url} />
//       <Album key={album.name} name={album.name} />
//     </div>
//   );
// });

// export const App = () => {
//   return (
//     <div>
//       {data.albums.items.map(album => {
//         return (
//           <div>
//             <img src={album.images[1].url} />
//             <h4>{album.name}</h4>
//             <ul>
//               {album.artists.map(art => {
//                 return <li>{art.name}</li>;
//               })}
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export const App = () => {
//   return (
//     <div>
//       {data.albums.items.map(album => {
//         return (
//           <div>
//             <Album
//               key={album.id}
//               image={album.images[1].url}
//               name={album.name}
//             />
//             <ul>
//               {album.artists.map(art => {
//                 return <li>{art.name}</li>;
//               })}
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export const App = () => {
  return (
    <div>
      {data.albums.items.map(album => {
        return (
          <div key={album.id}>
            <Album image={album.images[1].url} name={album.name} />
            {album.artists.map(art => {
              return <Artist key={art.id} name={art.name} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
