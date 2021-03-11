import React from 'react'
import { Artist } from './Artist'

const Album = (props) => {  //for albumArt: style={{ backgroundImage: `url(${props.image})` }}
    return (
        <div className="album">
            <div className="albumArt" >
                <img src={props.image}></img>
                <div className="icons">
                    <img src="icons/heart.svg"></img>
                    <img src="icons/play.svg"></img>
                    <img src="icons/dots.svg"></img>
                </div>
            </div>
            
            

            <div className="albumName">
                <a href={props.albumUrl}>{props.albumName}</a>
            </div>
            <div className="artists">
                {props.artists.map((artist, index) => {
                if(index === props.artists.length-1) { //would mean that you are at the last artist
                    console.log(index)
                    console.log(artist.external_urls.spotify)
                    return (<a href={artist.external_urls.spotify}>{artist.name}</a>)
                }
                else {  //would mean that you are NOT at the last artist
                    return (<a href={artist.external_urls.spotify}>{artist.name}, </a>)
                }
                })}
            </div>
        </div>
    )
}



export default Album;