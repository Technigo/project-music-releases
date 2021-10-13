import React from "react";
import data from "./data.json";
import Album from "./components/Album";

// console.log(data);
const AlbumArray = data.albums.items;
// console.log(AlbumArray);
const arraySinglesOnly = AlbumArray.filter(x => x.album_type.includes('single'))
console.log(arraySinglesOnly)

const arrayAlbumsOnly = AlbumArray.filter(x => x.album_type.includes('album'))
console.log(arrayAlbumsOnly)

export const App = () => {
  return (

    <div className="title-wrapper">
      <h1>New albums</h1>
    
    
      <div className="albums-wrapper">
      
        {arrayAlbumsOnly.map((album) => {

          // const numberOfArtists = album.artists.length

          return (
            
            <Album
              key={album.id}
              image={album.images[1].url}
              title={album.name}
              titleLink={album.external_urls.spotify}
              artist={album.artists}

            />  
          );
          })
        }
      
      </div>
      <h1>New singles</h1>
    
    
      <div className="albums-wrapper">
      
        {arraySinglesOnly.map((album) => {

          // const numberOfArtists = album.artists.length

          return (
            
            <Album
              key={album.id}
              image={album.images[1].url}
              title={album.name}
              titleLink={album.external_urls.spotify}
              artist={album.artists}

            />  
          );
          })
        }
      
      </div>
    </div>

    
    
  );
};
