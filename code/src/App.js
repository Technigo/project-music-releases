import React from 'react'
import data from './data.json'

import Album from './components/Album';
import Header from './components/Header';
import Icons from './components/Icons';

import './index.css'


  const album = data.albums.items[0];
  


export const App = () => {
  return (
    <div>
<Header
title="New albums and singles"/>

<Icons/>

{data.albums.items.map((album) => { //vi renderar ut varje album
return <Album 
link={album.external_urls.spotify}
artists={album.artists}
name={album.name}
image={album.images[0]}
/>



}
)}



</div>
  );
};
