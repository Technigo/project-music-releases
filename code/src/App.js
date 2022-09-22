import React from 'react';
import data from './data.json';
import Card from './components/Card'
import Header from './components/Header'
// import Artist from './components/Artist'

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
              // AlbumImage = {props.data.images[1].url} //sending the image link to the article component
              // AlbumName = {props.data.name} //sending the album name to the article component
              // AlbumLink = {props.data.external_urls.spotify} //sending the album url to the article component
              // bandName = {props.data.artists[0].name}
            />
          </div>
        )
  })}
  </section> 
  </>
  
  );
}
