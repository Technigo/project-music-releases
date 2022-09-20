import React from "react";


export const Album = (props) => {
    console.log(props.data);
 
    //return the album cover 
    return (
        <>
        <a href={props.href} target="_blank"> 
            <img src={props.images}></img> 
            <img src ="./icons/dots.svg"></img>
            <img src ="./icons/heart.svg"></img>
            <img src ="./icons/play.svg"></img>
            
        </a>

        <p> {props.albumName}</p>
        
        
        </>
    )
} 