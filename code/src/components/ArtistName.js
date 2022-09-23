import React from "react";
import { SongTitle } from "./SongTitle";     
import { AlbumCover } from "./AlbumCover";

export const ArtistName = (props) => {      // this is the song name
    console.log(props.data)                 //checking the extraction in the console
    return (

        <>
    <div className="Box">
        <h2 className="Song">Song: {props.data.name}</h2>          
        <SongTitle Artist = {props.data.artists[0].name}/> 
        
        
        <div className="icon-container"> 
            <a><img className="Heart-Icon" src="/icons/heart.svg" alt="Heart-Icon"/></a>
            <img className="Play-Icon" src="/icons/play.svg" alt="Play-Icon" /> 
            <img className="Dot-Icon" src="/icons/dots.svg" alt="Dot-Icon" /> 
        </div> 
        
    </div>
        </>   
    )
}