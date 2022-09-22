import React from 'react';
import data from './data.json';
import {Image} from './components/Image';

console.log(data);

export const App = () => {
  return (
      <div> 
        {data.albums.items.map((item) => {
          return <Image key={item.id} data={item}/>    
          })
        }
      </div>
  )
}
      

    


