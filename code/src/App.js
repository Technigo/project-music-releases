 import React from 'react'
import data from './data.json'

// import { AlbumCover } from '.components/Album/AlbumCover'
// import { AlbumName } from '.components/Album/AlbumName'
import { Album } from "components/Album";
import { Header } from "components/Header";
// import { ArtistName } from "components/Albumfolder/ArtistName";

// import { Elipse } from '.components/IconFunctions/Elipse'
// import { HeartButton } from '.components/IconFunctions/HeartButton'
// import { PlayButton } from '.components/IconFunctions/PlayButton'

// import { ClickOnAlbum } from '.components/OtherFunctions/ClickOnAlbum'
// import { ClickOnArtist } from '.components/OtherFunctions/ClickOnArtist'
// import { HoverEffects } from '.components/OtherFunctions/HoverEffects'

console.log(data)

const albumData = data.albums.items;

export const App = () => {
  return (
    <div>
      <Header />
      <section>

        {albumData.map((album) => { 
          return (
          <Album key={album.id} 
          name={album.name} 
          title={album.artists.[0].name}
          imageUrl={album.images.[1].url}
          artistUrl={album.artists.[0].external_urls.spotify}
          albumUrl={album.external_urls.spotify}

          />
          );
        })}
      </section>
    </div>
  );
};