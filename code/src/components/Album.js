import React from 'react';
import './album.css';
import { Artist } from './Artist'

// Körs en gång för varje varv i map, returnerar bild, artist coh album
export const Album = props => {
    return(
        <article className='album' >
            {/* ist för data.album... använder vi props som skickas med när <Album /> monteras i App.js */}
            <img src={props.album.images[1].url}></img>
            <h1>
                {props.album.artists.map(item => {
                    return (
                        <Artist key={item.id} item={item} />
                    )
                })}
            </h1>

            <h2>{props.album.name}</h2> 

        </article>       
    )
}



// Kommenterade ut denna då jag gjorde en ny komponent <h1>{props.album.artists[0].name}</h1>
