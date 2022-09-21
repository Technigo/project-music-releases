import React from 'react';
import {Artist} from './Artist';

export const Album = (props) => { 
  return (
    // <div className='album-child'>   
    <div className='album-child'> 
        <a href={props.link} target="_blank">
            <img src={props.image} alt="cover"></img>
        </a>

        < a href={props.link} target="_blank">
            <h2>{props.name}</h2>
        </a>
        
        <div className="artist-name">
        {props.artists.map (artist => {
            return <Artist key={artist.id} name={artist.name} link={artist.external_urls.spotify} />
        })}
        </div>
    </div>
    // </div>

)
        // <div className = 'Album'>
        // <Cover />
        // <h2>Album: {props.data.name} </h2>
        // <Artist />
        // </div> 

};