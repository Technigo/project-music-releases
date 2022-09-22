import React from 'react';
import data from './data.json';
import Card from './components/Card'

// named export
export const App = () => {
  return (
  <> 
<section class="container">
  <h1>New albums and singles</h1>
    <div class="albumContainer">
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
  </div>
</section> 
  </>
  
  );
}
