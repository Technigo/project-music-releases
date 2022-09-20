import React from 'react';
import data from './data.json';
import Musiccard from './components/Musiccard'

console.log(data);

//named export

export const App = () => {
  return (    
    <>
      {data.albums.items.map(item => {
        return <Musiccard key={item.id} data= {item} />
      })}        
    </>
  );
}


// default export
//The main component shuld be exported default

// export default


//if we want more divs, we can use <> </> to wrapp them all
// We use uppercase for components and for the funcions that returns html