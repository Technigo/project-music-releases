import React from 'react'

export const Album = props =>{
    return(
        <article className ="album-container">
        <div className="album-cover">
          <div className="hover-cover">
            <img className="hover-icons"src="./icons/heart.svg" alt="like icon"></img>
            <img className="play-icon" src="./icons/play.svg" alt="like icon"></img>
            <img className="hover-icons"src="./icons/dots.svg" alt="like icon"></img>
          </div>
          <img className="album-img"src={props.albumImg} alt="Album cover"></img>
           </div>
            <h2>{props.albumTitle}</h2>
            <p>
           {props.albumArtist.map((artist) => {
             return artist.name + " "

           })}
            </p> 
          
        </article>
  );
};
        