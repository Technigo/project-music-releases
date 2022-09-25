import React from 'react';
import data from './data.json';
import { AlbumDetails } from './components/AlbumDetails';

console.log(data);

export const App = () => {
  return(
    <>
    <div className='Outline'> 
        <div className='Album-Wrapper'>
          <h1>New albums & singles</h1>
              <section className="The-Album">   
                    {data.albums.items.map(item => {
                      return <AlbumDetails key = {data.id} data = {item}/>
                      })}
            </section>
        </div>
    </div>
    </>
    )

}