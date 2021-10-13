import React from "react";
import data from "./data.json";
import Album from "./components/Album";

// console.log(data);
const AlbumArray = data.albums.items;
console.log(AlbumArray);

export const App = () => {
  return (

    <div className="title-wrapper">
      <h1>New albums & singles</h1>
    
    
      <div className="albums-wrapper">
      
        {AlbumArray.map((album) => {

          // const numberOfArtists = album.artists.length

          return (
            
            <Album
              key={album.id}
              image={album.images[1].url}
              title={album.name}
              titleLink={album.external_urls.spotify}
              artist={album.artists}

              

              // artist={album.artists = ((artist, index) => {
                
              //    const numberOfArtists = album.artists.length

              //   if (numberOfArtists === index + 1 && numberOfArtists !== 1) {
              //     return <span> & {artist.name}</span>
              //   } else if (numberOfArtists === index + 2 && index !== 0) {
              //     return <span>, {artist.name}</span>
              //   } else {
              //     return <span>{artist.name}</span>
              //   }
                
              // })}


              // artist={album.artists.map((artist, index) => {
                
              //    const numberOfArtists = album.artists.length

              //   if (numberOfArtists === index + 1 && numberOfArtists !== 1) {
              //     return <span> & {artist.name}</span>
              //   } else if (numberOfArtists === index + 2 && index !== 0) {
              //     return <span>, {artist.name}</span>
              //   } else {
              //     return <span>{artist.name}</span>
              //   }
                
              // })}
              // artistLink={album.artists.map(
              //   (artist) => artist.external_urls.spotify
              // )}
            />  
          );
          })
        }
      
      </div>
    </div>
    
  );
};
