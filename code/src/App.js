import React from "react";
import rData from "data.json"; 
import Header from "components/Header.js";
import Album from "components/Album.js";
import Artists from "components/Artists.js";

console.log('Appdata', rData.albums.items);

const Artistinfo = (artistInfo) => ({
  artistName: artistInfo.name,
  artistUrl: artistInfo.external_urls.spotify,
});


export const App = () => {
return (
<>
  <main>
  <Header />

  <div className="albumsWrapper">
    {rData.albums.items.map((album) => {
       return (
            <Album
                key={album.id}
                coverImage={album.images[0].url}
                albumName={album.name}
                albumUrl={album.external_urls.spotify}
                />
              )
      })
    }
  </div>
   
   <div className="artistWrapper">
    {rData.albums.items.map((artist) => {
       return (
            <Artists
                key={artist.id}
                artistName={artist.artists.(Artistinfo.artistName)
                artistUrl={artist.artists.(Artistinfo.artistUrl)
                   
                }
                
                }
                />
              )
      })
    }
  </div>
  </main>
  </>
)}








