import React from 'react';
import data from './data.json';
import { Image } from './components/Image';
import { Header } from './components/Header';
import { Album } from './components/Album';
import { Artist } from './components/Artist';


console.log(data);

export const App = () => {
  return (
    <section className='outer-wrapper'>
      <div className='inner-wrapper'>
        <>
          <Header />
          <div className='cover'> 
            {data.albums.items.map((item) => {
              return (
                <>
                  <div className='card'> 
                    <Image key={item.id} data={item}/> 
                    <Album key={item} data={item}/> 
                    <Artist key={item.artists.id} data={item}/> 
                  </div>
                </>
              )  
              })
            }
          </div>
        </>
      </div>
    </section>
  )
}
    


