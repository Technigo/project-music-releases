import React from 'react'
import data from './data.json'

import { Header } from "components/Header";
import { AlbumList } from "components/AlbumList";

// import { AlbumCover } from '.components/Album/AlbumCover'
// import { AlbumName } from '.components/Album/AlbumName'
// import { Album } from "components/Album";
// import { ArtistName } from "components/Albumfolder/ArtistName";

// import { Elipse } from '.components/IconFunctions/Elipse'
// import { HeartButton } from '.components/IconFunctions/HeartButton'
// import { PlayButton } from '.components/IconFunctions/PlayButton'

// import { ClickOnAlbum } from '.components/OtherFunctions/ClickOnAlbum'
// import { ClickOnArtist } from '.components/OtherFunctions/ClickOnArtist'
// import { HoverEffects } from '.components/OtherFunctions/HoverEffects'


export const App = () => {
  return (
    <div>
      <Header />
      <section>
        <AlbumList articlesList={data} />
      </section>
    </div>
  );
};