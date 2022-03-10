import React from 'react'
import data from './data.json'

import { Header } from "components/Header";
import { AlbumList } from "components/AlbumList";

// import { Album } from "components/Album";


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