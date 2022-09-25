import React from "react";
import { ArtistDetails } from "./ArtistDetails";     


export const AlbumDetails = (props) => {                                                                     // album details compiled completely here
    console.log(props)                                                                                      //checking the extraction in the console

    const image = props.data.images.find((item) =>  {return item.height === 300 && item.width === 300 })  //defining the picture param

    const imageStyle = {
        backgroundImage: "url(" + image.url + ")"                                                       // album is injected to the background
    }

    return (                                                                                          // return ONLY displays matters below, !!reminder not to put line 8-11 inside return, as these are your code components!!
    <div className="Album">
    <div className="Box" style= {imageStyle}>
   
        <div className="icon-container"> 
            <img className="Heart-Icon" src="/icons/heart.svg" alt="Heart-Icon"/>
            <a href={props.data.external_urls.spotify} target="_blank"> <img className="Play-Icon" src="/icons/play.svg" alt="Play-Icon"/></a>
            <img className="Dot-Icon" src="/icons/dots.svg" alt="Dot-Icon" /> 
        </div> 
      
        </div>
        <h2 className="Song"><a href={props.data.external_urls.spotify} target="_blank">{props.data.name}</a></h2>  
        <ArtistDetails Artist = {props.data.artists}/> 
    </div> 
    )
}



