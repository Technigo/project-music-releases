import React from 'react'

export const Album = props =>{
    return(
        <article className ="album-container">
          <div className="album-cover">
            <div className="hover-cover">
              <img className="hover-icons"src="./icons/heart.svg" alt="like button"></img>
              <img className="play-icon" src="./icons/play.svg" alt="play button"></img>
              <img className="hover-icons"src="./icons/dots.svg" alt="dots button"></img>
            </div>
            <img className="album-img"src={props.albumImg} alt="Album cover"></img>
          </div>
          <a href={props.albumUrl}><h2>{props.albumTitle}</h2></a>
          <p>
            {props.albumArtist.map((artist, index) => {
              if(index<props.albumArtist.length-2){
                return <> <a href = {artist.external_urls.spotify} key={artist.name}> {artist.name}</a><span>, </span></>
              }
              /** If the artist is last artist in the array do not add & or , **/
              else if(index === props.albumArtist.length-1){
                return <a href = {artist.external_urls.spotify} key={artist.name}> {artist.name}</a>
              }
              /** If the artist has index 1 in the array add & after artist name **/
              else if (index === props.albumArtist.length-2){
                return <><a href = {artist.external_urls.spotify} key={artist.name}> {artist.name}</a><span> & </span></>
              }
            })}
          </p> 
          
        </article>
  );
};
        