import React from 'react';
import data from './data.json';
import AlbumName from './components/AlbumName'

console.log(data);
 // named export
export const App = () => {
  return (
      <>
      {/* <Header text = "testing the props"/> */}
       {data.albums.items.map (item => {
          return <AlbumName key={item.id} data = {item} text = "testing the props"/>
       })} 
      </>
  );
}

// default export 
// export default App