import React from 'react';
import data from './data.json';
import { ArtistName } from './components/ArtistName';
import { SongTitle } from './components/SongTitle';  //showing in html
import { AlbumCover } from './components/AlbumCover';


console.log(data);

export const App = () => {
  return(
      
        <div className='Outline'> 
          <div className='Album-Wrapper'>
            <h1>New albums & singles</h1>
                <section className="The-Album">     
                    <div className='Album-Picture'>
                    {data.albums.items.map(item => {
                      return <ArtistName key = {data.id} data = {item} text = "Test"/> //declaring a property called data ,item is the value
                      })}
                    <AlbumCover key = {data.id} AlbumCover = {data.AlbumCover}/>
                    {data.albums.items.map(item => {
                      console.log('image url', item.images[2])
                      return 
                    <>
                        <ArtistName key={data.id} data={item} /> //declaring a property called data ,item is the valu
                        <AlbumCover key={data.id} AlbumCover={item.images[2].url} /></> 
                    })
                  } 

                </div>
            </section>
        </div>
    </div>
   )
  }