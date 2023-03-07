import React from 'react';
import Header from 'components/Header';
import NewsList from 'components/NewsList';
import data from './data.json';


console.log(data);

export const App = () => {
  return (
    <section>
      <Header title="Hej hej på dej" />
      <NewsList articlesList={data} />
    </section>
  );
}
