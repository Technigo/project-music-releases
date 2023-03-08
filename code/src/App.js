import React from 'react';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import data from './data.json';
import Artist from './components/Artist';



console.log(data);

export const App = () => {
  return (
    <section>
      <Header title="Hej hej på dej" /> // Hämtar från Header, title lägger till props.title
      <Artist albumDetails={artist} />  
    </section>
  );
}
