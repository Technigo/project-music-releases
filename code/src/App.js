import React from 'react';
import data from './data.json';

import MusicCard from './components/MusicCard'


console.log(data);

//named export

export const App = () => {
  return (
    <>
    <section className="outer-wrapper">
      <div className="inner-wrapper">
        {data.albums.items.map(item => {
          return <MusicCard key={item.id} data= {item} />
        })}     
      </div>
    </section>   
    </>
  );
}


// default export
//The main component shuld be exported default

// export default


//if we want more divs, we can use <> </> to wrapp them all
// We use uppercase for components and for the funcions that returns html