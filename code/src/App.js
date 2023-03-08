/* eslint-disable max-len */
import React from 'react';
import Album from './components/Album'
import data from './data.json';

export const App = () => {
  return (
    // data.albums.items[0].name
    <div>
   { data.albums.items.map((gurka)=> { 
    return (
      <Album albumTitle={gurka.name} />
    )}
    )}
    </div>
    )}

      console.log(data)
    // {album.artist.map((singleArtist) => {
    //    return <Artist name={singleArtist.name} />
    // })}
    //   
    // 
    // })
    // <section>
    //   {/* // Hämtar från Header, title lägger till props.title ////  to comment cmd/ctrl + k + c, to uncomment  cmd/ctrl + k + u */}
    //   <Header title={data.albums.items[0].name} />
    //   <Artist name={data.artists.name} />
    // </section>
