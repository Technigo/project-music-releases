import React from 'react'

//import Artist from './components/Artist';
import Album from './components/Album';
import Header from './components/Header';

import data from './data.json'




export const App = () => {
  console.log(data);

  return (
    <>
    <Header />
    <Album />
    </>
    
   /* <div>
      <Album />
       {data.map(item => (
         <Album key={album} />
       ))}
    </div> */
  )
}
export default App;