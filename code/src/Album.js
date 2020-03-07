import React from "react";
import data from "./data.json";
//import AlbumCover from "./AlbumCover";
// import MusicLink from "./MusicLink";

// export const Album = () => {
//   return (
//     <div className="Album">
//       {data.albums.items.map(item => {
//         return (
//           <div key={item.id}>
//             <a href={item.external_urls.spotify}>
//               <img src={item.images[2].url} alt="album cover"></img>{" "}
//             </a>

//             {item.name}
//             <a href={item.artists[0].external_urls.spotify}>
//               {item.artists[0].name}
//             </a>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export const Album = () => {
  return (
    <div className="music-card">
      {data.albums.items.map(item => {
        return (
          <div className="Album">
            <div key={item.id}>
              <a href={item.external_urls.spotify}>
                <img
                  className="album-cover"
                  src={item.images[0].url}
                  alt="album cover"
                ></img>
              </a>
            </div>
            <div>
              <div className="album-name">{item.name}</div>
              <a
                className="artist"
                href={item.artists[0].external_urls.spotify}
              >
                {item.artists[0].name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Album;
