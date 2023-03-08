/* eslint-disable max-len */
import React from 'react';


const Album = (gurka) => {
    return (
        <div>
        <h1>{gurka.albumTitle}</h1>
        </div>
    );
};

console.log()

{/* const Album = (props) => {  props = parametern för Album 
  return (
    <section>
      {props.albums.items.map((singleAlbum) => {  props.articlesList.articles.map plockar från en array i json 
        return (
          <Album key={singleAlbum.id} albumDetails={singleAlbum} />  HTML tag Articles = Album om vi ändrar från Articles.js till AlbumList.js?, key ist för id, singleAlbum = gurka (det vi vill ska syns utåt), albumDetails = banan? 
        )
      }
  )}
    </section>
  );
}; */}

export default Album;

{/* I AlbumList plockar vi in en array från API som vi får via data.json

Artist.js fyller vi med innehåll dvs tar från API

App.js visar allt utåt */}