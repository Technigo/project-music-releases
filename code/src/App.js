import React from 'react';
import data from './data.json';
import { ArtistName } from './components/Artistname'
import { SongTitle } from './components/SongTitle'  //showing in html
import { AlbumCover } from './components/AlbumCover'
//import { TheAlbum } from './components/TheAlbum'
console.log(data);

/* Possible options: <PhotoAlbum layout="rows" photos={image} />*/
/*<AlbumCover key= {data.id} data = {Image} text = "Coveralbum"/>*/ 


export const App = () => {
  return(
    <div className='Outline'>     
        <div className='Album-Wrapper'>
            <section className="The-Album">         
                <div className='Album-Picture'>
                  {data.albums.items.map(item => {
                    return <ArtistName key = {data.id} data = {item} text = "Test"/> //declaring a property called data ,item is the value
                    })}
                    
                </div>
            </section>
        </div>
    </div>
    )

}
