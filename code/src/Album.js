import React from 'react'
import { Artist } from './Artist'

const Album = (props) => {
    return (
        <div>
            Album: {props.albumName}
            <br></br> 
            Artists: {props.artists.map((artist, index) => {
                if(index === props.artists.length-1) {
                    return `${artist.name}`;
                }
                else {
                    return `${artist.name}, `;
                }
            })}
            <br></br>
            Image url: <img src={props.image}></img>
            <br></br>
            Album url: <a href={props.albumUrl}>Listen on Spotify</a>
            <br></br>
            Artist url: <a href={props.artistUrl}>{props.artists[0].name}</a>
        </div>
    )
}



export default Album;