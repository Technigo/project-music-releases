import React from 'react';
import data from './data.json';
import Card from './components/Card'
import Header from './components/Header'

console.log(data);
// named export
export const App = () => {
  return (
  <> 
   <Header />
    <section class="albumContainer">
      {data.albums.items.map ((item) => {
        return (
          <div class="albumWrapper">
            <Card 
              key={item.id} 
              data = {item} 
            />
          </div>
        )
  })}
  </section> 
  </>
  
  );
}
