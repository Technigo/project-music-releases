import React from 'react';
import data from './data.json';
import Header from './components/Header';
import Albums from './components/Albums';

console.log(data);
export const App = () => {
  return (
    <section className="outer-wrapper">
      <div className="inner-wrapper">
        <Header />
        <section className="albumContainer">
          {data.albums.items.map((item) => {
            return <Albums key={item.id} data={item} />
          })}
        </section>
      </div>
    </section>
  );
}
