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
            <a href={props.albumUrl}><h2>{props.albumTitle}</h2></a>
            <p>
           {props.albumArtist.map((artist, index) => {
             if(index<props.albumArtist.length-2){
               console.log("Inne i for loop");
              return <> <a href = {artist.external_urls.spotify} key={artist.name}> {artist.name}</a><span>, </span></>
             }
             else if(index === props.albumArtist.length-1){
              return <a href = {artist.external_urls.spotify} key={artist.name}> {artist.name}</a>
             }
             else if (index === props.albumArtist.length-2){
              console.log(props.albumArtist.length);
             return <><a href = {artist.external_urls.spotify} key={artist.name}> {artist.name}</a><span> & </span></>
              
             }
           })}
            </p> 
          
        </article>
  );
};
        