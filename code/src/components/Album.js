import React from 'react'

export const Album = (props) => {

  return (
    <>
      <div className="album-card">
        <div className="album-card__inner">
          <div className = "album-cover">
            <a href={props.urlAlbum} target= "_blank" rel="noopener noreferrer">
                <img className="cover" src={props.image} alt={props.name}/>
            </a>
          </div>
          <div className="icon-container"> 
            <img className="icon heart" src="/icons/heart.svg" alt="heart icon"/>
            <img className="icon play" src="/icons/play.svg" alt="play button icon"/> 
            <img className="icon dots" src="/icons/dots.svg" alt="dots icon"/> 
          </div> 
        </div> 
        <div>
          <a href={props.urlAlbum} target= "_blank" rel="noopener noreferrer">  
            <h2 className="album-name">{props.name}</h2>
          </a>  
        </div>
        <div className="album-artist">
          <h2>{props.artists}</h2>
        </div>   
      </div> 
    </>
  );
};

export default Album;