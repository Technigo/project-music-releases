import React from "react";
import { SongTitle } from "./SongTitle";     
import { AlbumCover } from "./AlbumCover";

export const ArtistName = (props) => {      // this is the song name
    console.log(props.data)   
    console.log('webside', props.data.external_urls.spotify);              //checking the extraction in the console
    return (

        <>
    <div className="Box">
        <div className="title">
            <h2 className="Song">Song: {props.data.name}</h2>          
            <SongTitle Artist = {props.data.artists[0].name}/> 
            
        </div>
        <div className="icon-container"> 
            <img className="Heart-Icon" src="/icons/heart.svg" alt="Heart-Icon"/>
            <a href={props.data.external_urls.spotify}
                target="_blank">
                <img className="Play-Icon" src="/icons/play.svg" alt="Play-Icon" /> 
            </a>
            <img className="Dot-Icon" src="/icons/dots.svg" alt="Dot-Icon" /> 
        </div> 
        
    </div>
        </>   
       
    ) 
    
   
}