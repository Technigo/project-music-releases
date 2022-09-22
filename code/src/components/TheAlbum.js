import React from 'react'
import data from './data.json'
import { SongTitle } from "./SongTitle";     
import { Artistname} from "./Artistname";   
import { AlbumCover } from './AlbumCover';

console.log(data)

 const TheAlbum = (props) =>{
    return(
    <div className='Outline'>
        <div className='Album-Wrapper'>
            <div className="The-Album">
                <div className='Album-Picture'>

            

                </div>
            </div>
        </div>
    </div>
    )
}