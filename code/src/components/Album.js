import React from 'react';
import './album.css';
import { Artist } from './Artist'
import { Play } from './Play'

// Körs en gång för varje varv i map, returnerar bild, artist coh album
export const Album = props => {
    return (
        <section className="wrapper">
        <article className='album'>
            {/* ist för data.album... använder vi props som skickas med när <Album /> monteras i App.js */}
            <div className="image-container">

                <img src={props.album.images[1].url}>
                </img>
                <div className="animation">
                    <a href={props.album.external_urls.spotify}>
                    <Play />
                    </a>
                </div>
            </div>
            <a href={props.album.artists[0].external_urls.spotify}>

                <h1>
                    {props.album.artists.map(item => {
                        return (
                            <Artist key={item.id} item={item} />
                        )
                    })}
                </h1>
            </a>

            <a href={props.album.external_urls.spotify}>
                <h2>{props.album.name}</h2>
            </a>

        </article>
        </section>
    )
}



// Kommenterade ut denna då jag gjorde en ny komponent <h1>{props.album.artists[0].name}</h1>
