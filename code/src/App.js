import React from 'react';
import data from './data.json';
import { ArtistName } from './components/Artistname'
import { SongTitle } from './components/SongTitle'  //showing in html
import { AlbumCover } from './components/AlbumCover'
console.log(data);

/*<AlbumCover AlbumCover= {album.images[0].url}/>*/
/* <div className='innit'> 
                      {data && data.albums.map(item  =>{
                        return <AlbumCover AlbumCover = {props.AlbumCover}
                        name = {props.name}/>
                      })}
                    </div>*/ 
export const App = () => {
  return(
    <div className='Outline'>     
        <div className='Album-Wrapper'>
            <section className="The-Album">         
                <div className='Album-Picture'>
                  {data.albums.items.map(item => {
                    return <ArtistName key = {data.id} data = {item} text = "Test"/> //declaring a property called data ,item is the value
                    })}
                    <AlbumCover key = {data.id} AlbumCover = {data.AlbumCover}/> 

                </div>
            </section>
        </div>
    </div>
    )

}
